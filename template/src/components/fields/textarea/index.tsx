import { Input as AntInput, InputProps, Typography } from "antd";
import { FieldProps } from "formik";
import { helpers } from "../../../services";
import { useTranslation } from "react-i18next";

interface Props extends FieldProps {
  label?: string;
  type?: string;
  disabled?: boolean;
  resize?: "none" | "vertical" | "horizontal";
  antdProps?: any;
}

const { TextArea: AntTextArea } = AntInput;

const TextArea = (props: InputProps & Props) => {
  const {
    type,
    form: { setFieldValue, setFieldTouched, errors, touched },
    field: { name, value },
    label,
    resize = "none",
    disabled,
    size = "large",
    placeholder,
    antdProps
  } = props;
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const { t } = useTranslation();
  return (
    <div>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <AntTextArea
        name={name}
        value={value}
        style={{
          resize: resize
        }}
        disabled={disabled}
        type={type}
        min={type === "number" ? 0 : ""}
        size={size}
        status={errorValue && touchedError ? "error" : ""}
        onBlur={() => setFieldTouched(name, true)}
        placeholder={t(placeholder ? placeholder : ("Kiriting" as string))}
        onChange={e => setFieldValue(name, e.target.value)}
        {...antdProps}
      />
      {/*{errorValue && touchedError ? (*/}
      {/*  <Typography.Text strong className={"!text-xs"} type="danger">*/}
      {/*    {errorValue}*/}
      {/*  </Typography.Text>*/}
      {/*) : null}*/}
    </div>
  );
};

export default TextArea;
