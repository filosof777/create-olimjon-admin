import {Input as AntInput, InputProps, Typography} from 'antd';
import {FieldProps} from "formik";
import {helpers} from "../../../services";
import {useTranslation} from "react-i18next";

interface Props extends FieldProps {
    label?: string;
    disabled?: boolean;
    antdProps?: any
}

const Password = (props: InputProps & Props) => {
    const {form: {setFieldValue, setFieldTouched, errors, touched}, field: {name, value}, label, placeholder, antdProps, disabled} = props
    const errorValue = helpers.getNestedValue(errors, name);
    const touchedError = helpers.getNestedValue(touched, name);
    const {t} = useTranslation()
    return <div>
        {label ? <Typography.Text>{t(label)}</Typography.Text> : null}
        <AntInput.Password
            name={name}
            size={'large'}
            value={value}
            disabled={disabled}
            status={errorValue && touchedError ? 'error' : ''}
            onBlur={() => setFieldTouched(name, true)}
            placeholder={t(placeholder ? placeholder : 'Kiriting' as string)}
            onChange={(e) => setFieldValue(name, e.target.value)}
            {...antdProps} />
        {errorValue && touchedError ?
            <Typography.Text strong className={'!text-xs'} type="danger">{errorValue}</Typography.Text> : null}
    </div>
}

export default Password
