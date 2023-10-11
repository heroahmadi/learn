import React from "react";
import {Formik, Form, Field} from 'formik';

function CreatePost() {
    return (
        <div className="createPostPage">
            <Formik>
                <Form className="formContainer">
                    <label>Title: </label>
                    <Field id="inputCreatePost" name="title" placeHolder="(Ex: My Vacation)"></Field>

                    <label>Text: </label>
                    <Field id="inputCreatePost" name="text" placeHolder="(Ex: My Nice Vacation)"></Field>

                    <label>Username: </label>
                    <Field id="inputCreatePost" name="username" placeHolder="(Ex: John Doe)"></Field>

                    <button type="submit">Create post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;