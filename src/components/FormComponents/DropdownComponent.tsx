import { FieldHookConfig, FieldInputProps, useField } from 'formik'
import React from 'react'
import { Dropdown } from '../Styled/Dropdown.styled'


interface OtherProps {
    optionArray: Array<string | number>;
    label?: string
}

export const DropdownComponent = (props: OtherProps & FieldHookConfig<string>): JSX.Element => {
    const [field, meta, helpers] = useField(props);

    return (
        <div>
            <Dropdown>
                {props.optionArray.map(x => {
                    return <option key={x}>{x}</option>
                })}
            </Dropdown>
        </div>
    )
}
