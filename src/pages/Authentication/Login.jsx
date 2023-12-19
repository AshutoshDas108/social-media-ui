import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("Password is required"),
};

const Login = () => {
  const [formValue, setFormValue] = useState();

  const handleSubmit = (values) => {
    console.log("Submit", values);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
       // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">

          <div>
            <Field
              as={TextField}
              name="emial"
              palceholder="Email"
              type="email"
              variants="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-red-500"
            />
            </div>
            <div>
             <Field
              as={TextField}
              name="password"
              palceholder="Password"
              type="password"
              variants="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-red-500"
            />
          </div>
          </div>
          <Button sx={{padding: ".8rem 0rem"}} fullWidth type="submit" variant="contained" color="primary">LOGIN</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
