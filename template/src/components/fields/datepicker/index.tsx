import { DatePicker as AntDatePicker, Typography } from "antd";
import { FieldProps } from "formik";
import { useTranslation } from "react-i18next";
import { helpers } from "../../../services";
import dayjs from "dayjs";

interface Props extends FieldProps {
  label?: string;
  format?: string;
  onChange?: any;
  minDate?: any;
  maxDate?: any;
  disabled?: boolean;
  placeholder?: string;
  antdProps?: any;
}

const Datepicker = (props: Props) => {
  const {
    form: { setFieldValue, setFieldTouched, errors, touched },
    field: { name, value },
    label,
    minDate,
    maxDate,
    disabled,
    onChange = () => {},
    placeholder = "DD.MM.YYYY",
    format = "DD.MM.YYYY",
    antdProps = null
  } = props;
  const { t } = useTranslation();
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  return (
    <div>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <AntDatePicker
        size={"large"}
        className={"!block"}
        format={format}
        minDate={minDate ? dayjs(minDate) : undefined}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        disabled={disabled}
        status={errorValue && touchedError ? "error" : ""}
        placeholder={t(placeholder as string)}
        onBlur={() => setFieldTouched(name, true)}
        name={name}
        value={value ? dayjs(value) : null}
        onChange={(date: any) => {
          setFieldValue(name, date);
          onChange(date);
        }}
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

export default Datepicker;
