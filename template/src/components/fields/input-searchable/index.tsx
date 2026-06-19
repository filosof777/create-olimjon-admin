import { Button, InputProps, Typography } from "antd";
import { FieldProps } from "formik";
import { helpers } from "../../../services";
import { useTranslation } from "react-i18next";
import ReactInputMask from "react-input-mask";
import { forwardRef, Ref } from "react";
import { MinimalisticMagniferIcon } from "../../../assets/icon/components/solar-line-duotone-icons";
import { usePost } from "../../../hooks";
import { notification } from "../../index.tsx";
import { get } from "lodash";
import Spin from "../../spin";

interface InputSearchableProps extends FieldProps {
  label?: string;
  antdProps?: InputProps;
  placeholder?: string;
  required?: boolean;
  mask?: string;
  loading?: boolean;
  disabled?: boolean;
  url?: string;
  onChange?: any | undefined;
  onSuccess?: any | undefined;
  onError?: any | undefined;
}

const InputSearchable = forwardRef<HTMLInputElement, InputSearchableProps>(
  (
    {
      form: { setFieldValue, setFieldTouched, errors, touched },
      field: { name, value = "" },
      label,
      antdProps,
      mask = "",
      disabled = false,
      loading = false,
      required = true,
      url = "",
      onChange = () => {},
      onSuccess = () => {},
      onError = () => {}
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const errorValue = helpers.getNestedValue(errors, name);
    const touchedError = helpers.getNestedValue(touched, name);
    const formatChars = {
      "#": "[0-9]",
      A: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    };

    const { mutate, isLoading } = usePost();
    const onSearch = () => {
      mutate(
        {
          url: `${url}/${value}`,
          method: "get",
          data: null
        },
        {
          onSuccess: onSuccess,
          onError: error => {
            onError(error);
            notification({
              type: "error",
              message: t(
                get(
                  error,
                  "response.data.errorMessage",
                  t("Что-то пошло не так!")
                )
              )
            });
          }
        }
      );
    };

    return (
      <Spin spinning={isLoading}>
        {label ? (
          <Typography.Text>
            {t(label)}
            {required ? (
              <span className={"text-red-500 font-bold"}>*</span>
            ) : null}
          </Typography.Text>
        ) : null}

        {/*@ts-ignore*/}
        <ReactInputMask
          alwaysShowMask={false}
          value={value || ""} // value null bo'lsa bo'sh string
          maskChar="_"
          mask={mask}
          // @ts-ignore
          formatChars={formatChars}
          onBlur={() => setFieldTouched(name, true)}
          onChange={e => {
            const numericValue = e.target.value.replace(/\D/g, "");
            setFieldTouched(name, true);
            setFieldValue(name, numericValue);
            onChange(e);
          }}
          {...antdProps}
        >
          {inputProps => {
            return (
              <div className={"relative"}>
                <input
                  {...inputProps}
                  ref={ref}
                  disabled={disabled}
                  // @ts-ignore
                  placeholder={String(mask || "").replaceAll("#", 0)}
                  className={`tdc-mask-input tdc-mask-input-outlined ${
                    errorValue && touchedError && !value
                      ? "tdc-mask-input-status-error"
                      : ""
                  } !pr-10`}
                />
                {/*@ts-ignore*/}
                {String(value).replaceAll("_", "").length === mask.length ? (
                  <Button
                    loading={loading}
                    onClick={onSearch}
                    disabled={disabled}
                    rootClassName={
                      "!absolute right-1 top-1/2 -translate-y-1/2 !shadow-none"
                    }
                    type={"primary"}
                    icon={
                      <MinimalisticMagniferIcon
                        className={"!w-4 !h-4 !text-white"}
                      />
                    }
                  />
                ) : null}
              </div>
            );
          }}
        </ReactInputMask>
        {/*{errorValue && touchedError && (*/}
        {/*    <Typography.Text*/}
        {/*        strong*/}
        {/*        type="danger"*/}
        {/*        className="block mt-1 text-xs"*/}
        {/*    >*/}
        {/*        {errorValue}*/}
        {/*    </Typography.Text>*/}
        {/*)}*/}
      </Spin>
    );
  }
);

export default InputSearchable;
