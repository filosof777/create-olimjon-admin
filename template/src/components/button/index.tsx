import {Button as AntButton, ButtonProps} from 'antd';


const Button = (props: ButtonProps) => {
    return <AntButton {...props} >{props.children}</AntButton>
}

export default Button