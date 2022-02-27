import { Button, Input } from "@popsure/dirty-swan";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { SignupUser } from "../../pages/Signup";

const SignUpForm = (
  handleSubmit: ((values: SignupUser) => Promise<void>) | any
) => {
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

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => handleSubmit(values)}>
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
  );
};

export default SignUpForm;
