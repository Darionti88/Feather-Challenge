import { Button, Input } from "@popsure/dirty-swan";
import "@popsure/dirty-swan/dist/index.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

interface LoginUser {
  email: string;
  password: string;
}

const Login = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Muy corto! Mínimo 4 letras.")
      .email()
      .required("Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(5, "Password too short"),
  });
  const navigate = useNavigate();

  const [logUser] = useMutation(LOGIN);

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values: LoginUser) => {
            try {
              const response = await logUser({ variables: values });
              if (response.data) {
                localStorage.setItem("access-token", response.data.login.token);
                navigate("/dashboard");
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
            handleSubmit,
            resetForm,
          }) => (
            <Form className=' w-full flex flex-col space-y-10 items-center h-2/3 justify-center'>
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

              <Button
                disabled={isSubmitting}
                type='submit'
                className='w-4/6'
                buttonTitle='Log in'
              />
            </Form>
          )}
        </Formik>
        <hr className='w-5/6 border-featherDarkPurple border-bottom-6 mt-2 self-center border-opacity-30' />
        <div className='flex flex-col h-1/4 justify-center'>
          <Link
            to='/signup'
            className='font-bold text-blue-500 hover:underline text-1xl'>
            If you don't have an account please create one.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
