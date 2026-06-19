// withFormInput.tsx
import React from "react";
import { FieldProps } from "formik";
import { useTranslation } from "react-i18next";
import { Tooltip, Typography } from "antd";
import { helpers } from "../../../services";

// Interface for common props to be injected by the HOC
interface WithFormInputProps extends FieldProps {
  label?: string;
  required?: boolean;
  className?: string;
  [key: string]: any; // Allow additional props
}

// HOC to wrap input components
const withFormInput = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent: React.FC<P & WithFormInputProps> = props => {
    const {
      field: { name },
      form: { errors, touched },
      label,
      required = true,
      className = "",
      ...rest
    } = props;
    const { t } = useTranslation();
    const errorValue = helpers.getNestedValue(errors, name);
    const touchedError = helpers.getNestedValue(touched, name);
    return (
      <div className={`w-full ${className} relative`}>
        {label && (
          <Typography.Text>
            {t(label)}
            {required && <span className="text-red-500 font-bold">*</span>}
          </Typography.Text>
        )}
        <Component {...(rest as P)} field={props.field} form={props.form} />
        {errorValue && touchedError && (
          <Tooltip
            placement={"bottomLeft"}
            rootClassName={"!max-w-fit"}
            visible={errorValue instanceof Array && errorValue.length > 1}
            title={
              <>
                {errorValue instanceof Array && errorValue.length
                  ? errorValue.map((item: any, index: number) => (
                      <p
                        className={
                          "leading-3 !mb-1.5 last:!mb-0 !font-light text-xs "
                        }
                      >
                        {index + 1}. {t(item)}
                      </p>
                    ))
                  : t(errorValue)}
              </>
            }
            color={"red"}
          >
            <Typography.Text
              strong
              className="!text-xs absolute bottom-[-14px] line-clamp-1"
              type="danger"
            >
              {t(
                errorValue instanceof Array ? errorValue.join(", ") : errorValue
              )}
            </Typography.Text>
          </Tooltip>
        )}
      </div>
    );
  };

  // Set display name for debugging
  WrappedComponent.displayName = `WithFormInput(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return WrappedComponent;
};

// Export all components wrapped with the HOC
export default withFormInput;
