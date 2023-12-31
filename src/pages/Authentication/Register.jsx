import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import * as Yup from "yup";
import { registerUserAction } from "../../redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};
// const validationSchema = {
//   email: Yup.string().email("Invalid Email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "password must be at least 6 characters")
//     .required("Password is required"),
// };

const Register = () => {
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.gender= gender;
    console.log("Submit", values);
    dispatch(registerUserAction({data:values}))
    navigate('/login');
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  // const handleNavigate =()=>{
  //   navigate('/')
  // }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        //validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                type="text"
                variant="outlined"
                placeholder="First Name"
                fullWidth
              />

              <ErrorMessage
                name="firstName"
                component={"div"}
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                type="text"
                variants="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component={"div"}
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
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
                placeholder="Password"
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
            <RadioGroup onChange={handleChange} row aria-label="gender" name="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />

              <ErrorMessage
                name="gender"
                component={"div"}
                className="text-red-500"
              />
            </RadioGroup>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            //onClick={}
          >
            REGISTER
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
        <p>Already have an account ?</p>
        <Button onClick={()=>navigate("/login")}>LOGIN</Button>
      </div>
    </>
    
  );
};

export default Register;
