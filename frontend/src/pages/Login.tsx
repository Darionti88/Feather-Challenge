import { Button, Input } from "@popsure/dirty-swan";
import React, { useState } from "react";
import "@popsure/dirty-swan/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

interface LoginUser {
  email: string;
  password: string;
}

const Login = () => {
  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [logUser, { error, data }] = useMutation(LOGIN);

  const handleLogin = async (loginValues: LoginUser) => {
    const response = await logUser({ variables: loginValues });
    console.log(response.data);
    if (response.data) {
      localStorage.setItem("access-token", response.data.login.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Login</h1>
        <div className=' w-full flex flex-col space-y-10 items-center h-2/3 justify-center'>
          <Input
            value={loginUser.email}
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            className='wmx5 mt8 w-4/6'
            placeholder='Email'
          />
          <Input
            value={loginUser.password}
            type='password'
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            className='wmx5 mt8 w-4/6'
            placeholder='Password'
          />

          <Button
            onClick={() => handleLogin(loginUser)}
            className='w-4/6'
            buttonTitle='Log in'
          />
        </div>
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
