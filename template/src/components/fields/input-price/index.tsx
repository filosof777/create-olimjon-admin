import React from "react";
import CurrencyInput from "react-currency-input-field";
import { Input, Select, Typography } from "antd";
import { helpers } from "../../../services";
import { useTranslation } from "react-i18next";
import { get } from "lodash";

const CustomAntdInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, ref: any) => <Input {...props} ref={ref} />);
CustomAntdInput.displayName = "CustomAntdInput";

const InputPrice: React.FC = (props: any) => {
  const {
    form: { setFieldValue, values, setFieldTouched, errors, touched },
    field: { name, value },
    label,
    placeholder = "Kiriting",
    disabled,
    currencyName,
    options = [],
    hasCurrency = true,
    antdProps
  } = props;
  const errorValue = helpers.getNestedValue(errors, name);
  const touchedError = helpers.getNestedValue(touched, name);
  const { t } = useTranslation();
  return (
    <div>
      {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
      <div className="relative">
        <CurrencyInput
          id="price-input"
          decimalsLimit={2}
          disabled={disabled}
          decimalSeparator="."
          groupSeparator=" "
          allowNegativeValue={false}
          value={value}
          status={errorValue && touchedError ? "error" : ""}
          name={name}
          size={"large"}
          onBlur={() => {
            setFieldTouched(name, true);
          }}
          customInput={CustomAntdInput}
          onValueChange={value => {
            setFieldTouched(name, true);
            setFieldValue(name, value);
          }}
          placeholder={t(placeholder as string)}
          {...antdProps}
        />
        {hasCurrency && options.length ? (
          <Select
            rootClassName={"!absolute right-0 top-0 w-20"}
            className={"!h-full"}
            options={options}
            disabled={disabled}
            value={get(values, currencyName)}
            onChange={value => {
              setFieldValue(currencyName, value);
            }}
            variant={"borderless"}
          />
        ) : null}
      </div>
      {/*{errorValue && touchedError ?*/}
      {/*    <Typography.Text strong className={'!text-xs'} type="danger">{errorValue}</Typography.Text> : null}*/}
    </div>
  );
};

export default InputPrice;
