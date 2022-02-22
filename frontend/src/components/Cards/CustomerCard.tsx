import { Link } from "react-router-dom";
import { AllPolicy } from "../../interfaces/allPolicies.interface";
import avatar from "../../assets/images/avatar-placeholder.png";
import Chip from "../Chip/Chip";

const CustomerCard = ({
  customer,
  policyNumber,
  status,
}: Partial<AllPolicy>) => {
  return (
    <div className=' w-5/6 lg:w-1/3 h-3/4 bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card'>
      <div className='h-2/4 w-full flex flex-col items-center justify-center'>
        <img src={avatar} className='h-48 py-2 ' alt='avatar-placeholder' />
        <hr className='w-5/6 border-featherDarkPurple border-bottom-4 border-opacity-30' />
      </div>
      <div className='flex flex-col  h-2/4 w-full space-y-4 items-center justify-between'>
        <div className='w-full h-3/5 flex flex-col items-center space-y-5'>
          <div className='flex flex-col'>
            <label
              htmlFor='fullName'
              className='text-1xl self-center text-gray-400'>
              Full Name:{" "}
            </label>
            <p id='fullName' className='text-2xl text-text'>
              {customer?.firstName} {customer?.lastName}
            </p>
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='dateOfBirth'
              className='text-1xl self-center text-gray-400'>
              Date Of Birth:{" "}
            </label>
            <p id='dateOfBirth' className='text-2xl text-text'>
              {customer?.dateOfBirth}
            </p>
          </div>
        </div>
        <div className='flex w-5/6 h-2/5 items-center justify-between'>
          <Chip status={status} />
          <Link
            to={`/policy/${policyNumber}`}
            className='font-bold text-2xl text-blue-500 hover:underline cursor-pointer'>
            <p>{`P# ${policyNumber}`}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
