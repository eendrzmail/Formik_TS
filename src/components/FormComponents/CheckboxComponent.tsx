import React from 'react'
import PropTypes from 'prop-types'
import { FieldHookConfig, useField } from 'formik'
import { Input } from '../Styled/Input.styled';


interface OtherProps {
    label?: string;

}

function CheckboxComponent(props: OtherProps & FieldHookConfig<string | number>): JSX.Element {
    const [field, meta] = useField(props);

    return (
        <div>
            {props.label}
            {
                Array.isArray(meta.initialValue) ?
                    <Input type="checkbox" {...field} {...props} value={props.label}></Input>
                    :
                    <Input type="checkbox" {...field} {...props}></Input>

            }
        </div>
    )
}

export default CheckboxComponent

