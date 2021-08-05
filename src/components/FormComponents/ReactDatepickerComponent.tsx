import { FieldHookConfig, useField } from 'formik'
import React from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';



export const ReactDatepickerComponent = (props: FieldHookConfig<Date>): JSX.Element => {
    const [field, meta, helpers] = useField(props);

    console.log(helpers)

    return (
        <div>
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={field.value}
                // value={field.value}

                onChange={(date: Date) => {
                    helpers.setValue(date)
                }}
            >
            </DatePicker>
        </div>
    )
}
