import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import LoginForm from "../components/Forms/LoginForm";

export interface LoginUser {
  email: string;
  password: string;
}

const Login = () => {
  const [logUser] = useMutation(LOGIN);

  const handleSubmit = async (values: LoginUser) => {
    try {
      const response = await logUser({ variables: values });
      if (response.data) {
        localStorage.setItem("access-token", response.data.login.token);
        navigate("/dashboard");
      }
    } catch (errors) {
      alert(errors);
    }
  };

  const navigate = useNavigate();

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Login</h1>
        <LoginForm handleSubmit={handleSubmit} />
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
