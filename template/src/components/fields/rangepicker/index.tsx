import { DatePicker as AntDatePicker, Typography } from "antd";
import { FieldProps } from "formik";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { get } from "lodash";

interface Props extends FieldProps {
  label?: string;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  startName?: string;
  endName?: string;
  antdProps?: any;
}

const RangePicker = (props: Props) => {
  const {
    form: { setFieldValue, setFieldTouched, errors, values, touched },
    field: { name },
    label,
    startName = "start",
    endName = "end",
    disabled,
    placeholder,
    format = "DD.MM.YYYY",
    antdProps = null
  } = props;
  const { t } = useTranslation();
  const errorStartDateValue = get(errors, startName);
  const touchedStartDateError = get(touched, startName);
  const errorEndDateValue = get(errors, endName);
  const touchedEndDateError = get(touched, endName);

  return (
    <div>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <div>
        <AntDatePicker.RangePicker
          className={"w-full"}
          format={format}
          size={"large"}
          disabled={disabled}
          status={
            (errorStartDateValue && touchedStartDateError) ||
            (errorEndDateValue && touchedEndDateError)
              ? "error"
              : ""
          }
          placeholder={[t(placeholder as string), t(placeholder as string)]}
          onBlur={() => {
            setFieldTouched(get(values, startName), true);
            setFieldTouched(get(values, endName), true);
          }}
          name={name}
          value={
            get(values, startName) && get(values, endName)
              ? [dayjs(get(values, startName)), dayjs(get(values, endName))]
              : null
          }
          onChange={(date: any) => {
            setFieldValue(startName, date[0]);
            setFieldValue(endName, date[1]);
          }}
          {...antdProps}
        />
      </div>
      {/*{errorStartDateValue && touchedStartDateError || errorEndDateValue && touchedEndDateError ?*/}
      {/*    <Typography.Text strong className={'!text-xs'}*/}
      {/*                     type="danger">{errorStartDateValue as string || errorEndDateValue as string}</Typography.Text> : null}*/}
    </div>
  );
};

export default RangePicker;
