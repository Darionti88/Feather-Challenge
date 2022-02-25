import { Button, Input } from "@popsure/dirty-swan";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import "@popsure/dirty-swan/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutations";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .min(4, "Muy corto! Mínimo 4 letras.")
      .email()
      .required("Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(5, "Password too short"),
  });
  const navigate = useNavigate();

  const [registerUser, { error }] = useMutation(REGISTER);

  const handleSignUp = () => {
    registerUser({ variables: newUser });
    navigate("/login");
  };

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            try {
              const response = await registerUser({ variables: values });
              if (response.data) {
                navigate("/login");
              }
            } catch (errors) {
              alert(errors);
            }
          }}>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            isValid,
          }) => (
            <Form className=' w-full flex flex-col space-y-10 items-center h-3/4 justify-center'>
              <div className='w-full flex flex-col items-center space-y-3'>
                <Input
                  id='firstName'
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className='wmx5 mt8 w-4/6'
                  placeholder='First Name'
                  error={touched.firstName ? errors.firstName : ""}
                />
                <Input
                  id='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='wmx5 mt8 w-4/6'
                  placeholder='Last Name'
                  error={touched.lastName ? errors.lastName : ""}
                />
                <Input
                  id='email'
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className='wmx5 mt8 w-4/6'
                  placeholder='Email'
                  error={touched.email ? errors.email : ""}
                />
                <Input
                  id='password'
                  value={values.password}
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='wmx5 mt8 w-4/6'
                  placeholder='Password'
                  error={touched.password ? errors.password : ""}
                />
              </div>
              <Button
                disabled={!isValid || isSubmitting}
                type='submit'
                className='w-4/6 mt-5'
                buttonTitle='Sign up'
              />
            </Form>
          )}
        </Formik>

        <hr className='w-5/6 border-featherDarkPurple border-bottom-6 mt-2 self-center border-opacity-30' />
        <div className='flex flex-col h-1/4 justify-center'>
          <Link
            to='/login'
            className='font-bold text-blue-500 hover:underline text-1xl'>
            If you already have an account Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
