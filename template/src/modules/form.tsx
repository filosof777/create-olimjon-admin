//@ts-nocheck

import { FC, ReactNode } from "react";
import {
  Form as FormikForm,
  Formik,
  FormikHandlers,
  FormikHelpers,
  FormikState
} from "formik";
import { IMethod, TParams } from "../services/types";
import { get, isArray } from "lodash";
import { UseMutationResult, useQueryClient } from "@tanstack/react-query";
import * as Yup from "yup";
import { QueryClient } from "@tanstack/query-core";
import { usePost } from "../hooks";
import { AxiosError } from "axios";
import { notification } from "antd";
import { useTranslation } from "react-i18next";

type TFields = {
  name: string;
  type?:
    | "object"
    | "array"
    | "number"
    | "string"
    | "boolean"
    | "date"
    | "any"
    | "email"
    | "url"
    | undefined;
  value?: any;
  required?: boolean;
  disabled?: boolean | string;
  minValue?: number;
  maxValue?: number;
  min?: number;
  max?: number;
  onSubmitKey?: any;
  onSubmitValue?: (value: any, values: any) => any;
}[];

interface IForm {
  url: string;
  method: IMethod;
  testApi?: boolean;
  name: string;
  params?: TParams | undefined;
  children?: (
    data: FormikState<any> &
      FormikHelpers<any> &
      FormikHandlers &
      UseMutationResult<any, any, any> & { fields: TFields },
    mutatePost: UseMutationResult<any, any, any>
  ) => ReactNode;
  onSuccess?: (
    data: any,
    resetForm: () => void,
    queryClient: QueryClient
  ) => any;
  onError?: (error: AxiosError) => void;
  fields: TFields;
}

const Form: FC<IForm> = ({
  url,
  method,
  onSuccess = () => {},
  onError = null,
  children,
  fields,
  name,
  params
}) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const mutatePost: UseMutationResult<any, any, any> = usePost();
  return (
    <>
      <Formik
        initialValues={
          isArray(fields)
            ? fields.reduce(
                (prev, curr) => ({
                  ...prev,
                  [curr.name]: curr.value
                }),
                {}
              )
            : {}
        }
        enableReinitialize={true}
        validationSchema={() => {
          if (!isArray(fields)) {
            return Yup.object().shape({});
          }

          const validationFields: any = {};

          fields.forEach(field => {
            let validationField: any;

            switch (field.type) {
              case "string":
                validationField = Yup.string().typeError("Matn bo'lishi kerak");
                break;
              case "object":
                validationField = Yup.object().typeError(
                  "Ob'yekt bo'lishi kerak"
                );
                break;
              case "url":
                validationField = Yup.string().matches(
                  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                  "URL ko'rinishida bo'lishi kerak"
                );
                break;
              case "number":
                validationField = Yup.number()
                  .typeError("Raqam bo'lishi kerak")
                  .test("minValue", "Qiymat juda kichik!", (value: any) => {
                    return field.minValue !== undefined
                      ? value >= field.minValue
                      : true;
                  })
                  .test("maxValue", "Qiymat juda katta!", (value: any) => {
                    return field.maxValue !== undefined
                      ? value <= field.maxValue
                      : true;
                  });
                break;
              case "array":
                validationField = Yup.array().typeError(
                  "To'plam bo'lishi kerak"
                );
                break;
              case "boolean":
                validationField = Yup.boolean().typeError(
                  "Rost yoki yolgo'on qiymat bo'lishi kerak"
                );
                break;
              case "date":
                validationField = Yup.date().typeError(
                  "Sana ko'rinishida bo'lishi kerak"
                );
                break;
              case "email":
                validationField = Yup.string()
                  .email("Email ko'rinishida bo'lishi kerak")
                  .typeError("Email bo'lishi kerak");
                break;
              default:
                validationField = Yup.string();
            }

            if (field.required) {
              validationField = validationField.required("Majburiy");
            }

            if (field.min) {
              validationField = validationField.min(
                field.min,
                `Kam qiymat kiritildi!`
              );
            }

            if (field.max) {
              validationField = validationField.max(
                field.max,
                "Belgilangan qiymatdan oshib ketti!"
              );
            }

            validationField = validationField.nullable();

            validationFields[field.name] = validationField;
          });

          return Yup.object().shape(validationFields);
        }}
        onSubmit={(values, { resetForm, setFieldError }) => {
          values = { ...values };
          fields.forEach(field => {
            if (Object.prototype.hasOwnProperty.call(field, "onSubmitValue")) {
              if (typeof field.onSubmitValue === "function") {
                if (
                  Object.prototype.hasOwnProperty.call(field, "onSubmitKey")
                ) {
                  values[field.onSubmitKey] = field.onSubmitValue(
                    values[field.name],
                    values
                  );
                  delete values[field.name];
                } else {
                  values[field.name] = field.onSubmitValue(
                    values[field.name],
                    values
                  );
                }
              }
            }
            if (Object.prototype.hasOwnProperty.call(field, "disabled")) {
              if (field.disabled) {
                delete values[field.name];
              }
            }
          });
          mutatePost.mutate(
            {
              url,
              method,
              data: values,
              params
            },
            {
              onSuccess: data => {
                onSuccess(data, resetForm, queryClient);
                if (name) {
                  queryClient.invalidateQueries({ queryKey: [name] });
                }
              },
              onError: error => {
                if (get(error, "status") === 422) {
                  const errors = get(error, "response.data.data");
                  if (errors instanceof Array) {
                    errors.map(({ field, message }) =>
                      setFieldError(field, message)
                    );
                  } else if (errors instanceof Object) {
                    Object.keys(errors).map(field => {
                      return setFieldError(field, errors[field]);
                    });
                  }
                }
                if (onError) {
                  onError(error);
                } else {
                  notification.error({
                    message: t(
                      get(
                        error,
                        "response.data.msg",
                        get(error, "response.data.message", "Xatolik yuz berdi")
                      )
                    )
                  });
                }
              }
            }
          );
        }}
      >
        {(props: FormikState<any> & FormikHelpers<any> & FormikHandlers) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          return (
            //@ts-ignore
            <FormikForm onSubmit={props.handleSubmit}>
              {children(
                { ...props, ...mutatePost, fields: fields },
                mutatePost
              )}
            </FormikForm>
          );
        }}
      </Formik>
    </>
  );
};

export default Form;
