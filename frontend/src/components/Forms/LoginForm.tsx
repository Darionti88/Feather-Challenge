import { Button, Input } from "@popsure/dirty-swan";
import "@popsure/dirty-swan/dist/index.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { LoginUser } from "../../pages/Login";

const LoginForm = ({
  handleSubmit,
}: ((value: LoginUser) => Promise<void>) | any) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Email too short, at least 4 characters.")
      .email("Must be valid Email")
      .required("Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(5, "Password too short"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values) => handleSubmit(values)}>
      {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
        <Form className=' w-full flex flex-col space-y-10 items-center h-2/3 justify-center'>
          <Input
            aria-errormessage='emailerr'
            data-testid='email'
            id='email'
            aria-invalid
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className='wmx5 mt8 w-4/6'
            placeholder='Email'
            error={touched.email ? errors.email : ""}
          />
          <Input
            data-testid='password'
            id='password'
            value={values.password}
            type='password'
            onChange={handleChange}
            onBlur={handleBlur}
            className='wmx5 mt8 w-4/6'
            placeholder='Password'
            error={touched.password ? errors.password : ""}
          />

          <Button
            type='submit'
            data-testid='disabled-button'
            disabled={!isValid}
            className='w-4/6'
            buttonTitle='Log in'
          />
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
