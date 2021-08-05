import { FieldHookConfig, FieldInputProps, useField } from 'formik'
import React from 'react'
import { Input } from '../Styled/Input.styled'

interface OtherProps {
    label: string
}

const InputComponent = (props: OtherProps & FieldHookConfig<string>): JSX.Element => {
    const [field] = useField(props);

    return (
        <div>
            <label>{props.label}</label>
            <Input type="text" {...field} {...props} value={field.value} />
        </div>
    )
}

export default InputComponent;
