import { Empty, InputProps, Select as AntSelect, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { FieldProps } from "formik";
import { helpers } from "../../../services";
import { get } from "lodash";

interface Props extends FieldProps {
  label?: string;
  options?: any;
  antdProps?: any;
  isMulti?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: any;
}

const Select = (props: InputProps & Props) => {
  const {
    form: { setFieldValue, setFieldTouched, errors, touched },
    field: { name, value },
    label,
    disabled,
    isMulti = undefined,
    onChange = () => {},
    antdProps,
    placeholder
  } = props;
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const { t } = useTranslation();

  return (
    <div>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <AntSelect
        className={"!w-full"}
        value={value ? value : undefined}
        onBlur={() => {
          setFieldTouched(name, true);
        }}
        size={"large"}
        disabled={disabled}
        mode={isMulti ? "multiple" : undefined}
        options={
          props.options.length
            ? props.options.map((item: any) => {
                return {
                  ...item,
                  label: t(get(item, "label")),
                  value: get(item, "value")
                };
              })
            : []
        }
        placeholder={t(placeholder ? placeholder : ("Tanlang" as string))}
        status={errorValue && touchedError ? "error" : ""}
        onChange={value => {
          setFieldTouched(name, true);
          setFieldValue(name, value);
          onChange(value);
        }}
        notFoundContent={<Empty description={t("Ma'lumot topilmadi")} />}
        {...antdProps}
      />
      {/*{errorValue && touchedError ?*/}
      {/*    <Typography.Text strong className={'!text-xs'} type="danger">{errorValue}</Typography.Text> : null}*/}
    </div>
  );
};

export default Select;
