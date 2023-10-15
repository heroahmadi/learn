import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    let navigate = useNavigate();

    const initialValues = {
        title: "",
        text: "",
        username: ""
    };

    const validationScheme = Yup.object().shape({
        title: Yup.string().required("Title cannot be empty!"),
        text: Yup.string().required(),
        username: Yup.string().min(3).max(25).required()
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/post", data).then((response) => {
            navigate('/post');
        });
    }

    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" />
                    <Field autocomplete="off" id="inputCreatePost" name="title" placeHolder="(Ex: My Vacation)"></Field>

                    <label>Text: </label>
                    <ErrorMessage name="text" />
                    <Field autocomplete="off" id="inputCreatePost" name="text" placeHolder="(Ex: My Nice Vacation)"></Field>

                    <label>Username: </label>
                    <ErrorMessage name="username" />
                    <Field autocomplete="off" id="inputCreatePost" name="username" placeHolder="(Ex: John Doe)"></Field>

                    <button type="submit">Create post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;