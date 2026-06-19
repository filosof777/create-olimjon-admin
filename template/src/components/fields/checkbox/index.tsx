import { Checkbox } from "antd";
import { useTranslation } from "react-i18next";
import { FieldProps } from "formik";
interface Props extends FieldProps {
  label?: string;
  type?: string;
  onChange?: any;
  antdProps?: any;
}
const Index = (props: Props) => {
  const {
    label,
    antdProps,
    onChange = () => {},
    form: { setFieldValue },
    field: { name, value }
  } = props;
  const { t } = useTranslation();
  return (
    <Checkbox
      {...antdProps}
      checked={value}
      onChange={e => {
        setFieldValue(name, e.target.checked);
        onChange(e);
      }}
    >
      {t(label as string)}
    </Checkbox>
  );
};

export default Index;
