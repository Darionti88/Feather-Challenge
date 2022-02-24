import { Button, Input } from "@popsure/dirty-swan";
import React from "react";
import "@popsure/dirty-swan/dist/index.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Login</h1>
        <div className=' w-full flex flex-col space-y-10 items-center h-2/3 justify-center'>
          <Input className='wmx5 mt8 w-4/6' placeholder='Email' />
          <Input className='wmx5 mt8 w-4/6' placeholder='Password' />

          <Button className='w-4/6' buttonTitle='Log in' />
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
