import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import CheckboxComponent from './FormComponents/CheckboxComponent'
import { DropdownComponent } from './FormComponents/DropdownComponent'
import InputComponent from './FormComponents/InputComponent'
import { ReactDatepickerComponent } from './FormComponents/ReactDatepickerComponent'


export const FormPage = (): JSX.Element => {

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    role: "User",
                    date: new Date(),
                    toggle: false,
                    checked: []
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "15 characters or less")
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, "15 characters or less")
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], "Passwords must match")
                        .required('Required'),
                    email: Yup.string().email()
                        .required('Required'),
                    role: Yup.string()
                        .required(),
                    date: Yup.date()
                        .required("Required")
                })}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="form">
                    <InputComponent label="Imie" name="firstName"></InputComponent>
                    <InputComponent label="Nazwisko" name="lastName"></InputComponent>
                    <InputComponent label="Email" name="email"></InputComponent>
                    <InputComponent type="password" label="Hasło" name="password"></InputComponent>
                    <InputComponent type="password" label="Powtórz hasło" name="confirmPassword"></InputComponent>
                    <DropdownComponent label="Rola" optionArray={[1, 2, 3]} name="role"></DropdownComponent>
                    <ReactDatepickerComponent name="date"></ReactDatepickerComponent>
                    <CheckboxComponent name="toggle" label="Toggle"></CheckboxComponent>
                    <CheckboxComponent name="checked" label="A"></CheckboxComponent>
                    <CheckboxComponent name="checked" label="B"></CheckboxComponent>
                    <CheckboxComponent name="checked" label="C"></CheckboxComponent>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
