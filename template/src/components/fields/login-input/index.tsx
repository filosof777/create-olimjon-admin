import {FieldProps} from "formik";
import React from "react";
import {helpers} from "../../../services";
import {useTranslation} from "react-i18next";
import {get} from "lodash";
import {EyeClosedIcon, EyeIcon} from "../../../assets/icon/components/solar-line-duotone-icons";

interface Props extends FieldProps {
    icon: React.ReactNode
    label?: string;
    autoFocus?: boolean
}

const LoginInput = (props: Props & HTMLInputElement) => {
    const {
        form: {setFieldValue, setFieldTouched, errors, touched},
        field: {name, value},
        placeholder,
        autoFocus = false,
        icon,
        type = 'text'
    } = props
    const errorValue = helpers.getNestedValue(errors, name);
    const touchedError = helpers.getNestedValue(touched, name);
    const {t} = useTranslation()
    const [showPassword, setShowPassword] = React.useState(false)
    return <>
        <div className={'  relative px-5 py-3 '}>
            {icon ? <div className={''}>{icon}</div> : null}
            <input type={showPassword ? 'text' : type} placeholder={t(placeholder)}
                   autoFocus={autoFocus}
                   onBlur={() => setFieldTouched(name, true)}
                   onChange={(e) => setFieldValue(name, get(e, 'target.value'))}
                   defaultValue={value}
                   className={`absolute top-0 left-0 w-full h-full border  rounded-lg pl-14 ${type === 'password' ? 'pr-10' : 'pr-3'} outline-none transition-all focus:border-blue-500 ${errorValue && touchedError ? 'border-red-500' : 'border-[#2148C0] text-black'}`}/>
            {type === 'password' ? showPassword ? <EyeClosedIcon
                    onClick={() => setShowPassword(false)}
                    className={'absolute top-1/2 transform -translate-y-1/2 right-3 text-[#2148C0] cursor-pointer'}/>
                : <EyeIcon className={'absolute top-1/2 transform -translate-y-1/2 right-3 text-[#2148C0] cursor-pointer'}
                           onClick={() => setShowPassword(true)}/>  : null}
        </div>
    </>

}

export default LoginInput