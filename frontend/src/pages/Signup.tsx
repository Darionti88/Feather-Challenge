import { Button, Input } from "@popsure/dirty-swan";
import React, { useState } from "react";
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
  const navigate = useNavigate();

  const [registerUser, { error }] = useMutation(REGISTER);

  const handleSignUp = () => {
    registerUser({ variables: newUser });
    navigate("/");
  };

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Sign Up</h1>
        <div className=' w-full flex flex-col space-y-2 items-center h-4/5 justify-evenly'>
          <div className='w-full flex flex-col items-center space-y-3'>
            <Input
              value={newUser.firstName}
              className='wmx5  w-4/6'
              placeholder='First Name'
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
            />
            <Input
              value={newUser.lastName}
              className='wmx5  w-4/6'
              placeholder='Last Name'
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
            />
            <Input
              value={newUser.email}
              className='wmx5 w-4/6'
              placeholder='Email'
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <Input
              value={newUser.password}
              className='wmx5 w-4/6'
              placeholder='Password'
              type='password'
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>
          <Button
            onClick={() => handleSignUp()}
            className='w-4/6 mt-5'
            buttonTitle='Sign up'
          />
        </div>
        <hr className='w-5/6 border-featherDarkPurple border-bottom-6 mt-2 self-center border-opacity-30' />
        <div className='flex flex-col h-1/5 justify-center'>
          <Link
            to='/signup'
            className='font-bold text-blue-500 hover:underline text-1xl'>
            If you already have an account Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
