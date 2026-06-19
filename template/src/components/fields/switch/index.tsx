import { InputProps, Switch as AntSwitch, Typography } from "antd";
import { FieldProps } from "formik";

interface Props extends FieldProps {
  label?: string;
  disabled?: boolean;
  className?: string;
}

const Switch = (props: InputProps & Props) => {
  const {
    label,
    className = "flex items-center",
    form: { setFieldValue },
    field: { name, value },
    disabled
  } = props;
  return (
    <div className={className}>
      {label && <Typography.Text className="mr-2">{label}</Typography.Text>}
      <AntSwitch
        onChange={value => setFieldValue(name, value)}
        defaultValue={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Switch;
