import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function Register() {
    const initialValues = {
        username: "",
        password: ""
    };

    const validationScheme = Yup.object().shape({
        username: Yup.string().min(3).max(25).required(),
        password: Yup.string().min(8).max(35).required()
    });

    const onSubmit = ((data) => {
        axios.post(`http://localhost:3001/auth`, data).then((resp) => {
            console.log(data);
        });
    });

    return (
        <div>Register
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
                <Form className="formContainer">
                    <label>Username: </label>
                    <ErrorMessage name="username" />
                    <Field autocomplete="off" id="inputCreatePost" name="username" placeHolder="(Ex: John Doe)"></Field>

                    <label>Password: </label>
                    <ErrorMessage name="password" />
                    <Field type="password" autocomplete="off" id="inputCreatePost" name="password" placeHolder="Password "></Field>

                    <button type="submit">Create post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register;