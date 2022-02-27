import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutations";
import SignUpForm from "../components/Forms/SignUpForm";

export interface SignupUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();

  const [registerUser] = useMutation(REGISTER);

  const handleSubmit = async (values: SignupUser) => {
    try {
      const response = await registerUser({ variables: values });
      if (response.data) {
        navigate("/login");
      }
    } catch (errors) {
      alert(errors);
    }
  };

  return (
    <div className='flex flex-col container mx-auto items-center justify-flex-start h-full px-10 '>
      <div className=' w-5/6 lg:w-1/3 h-3/4 flex flex-col items-center bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card shadow-md'>
        <h1 className=' pt-5 text-4xl text-featherDarkPurple'>Sign Up</h1>
        <SignUpForm handleSubmit={handleSubmit} />
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
