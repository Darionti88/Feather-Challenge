import { AllPolicy } from "../../interfaces/allPolicies.interface";
import FieldAndLabel from "../FieldAndLabel/FieldAndLabel";
import health from "../../assets/images/health.png";
import house from "../../assets/images/household.jpg";
import liability from "../../assets/images/liability.jpeg";

import Chip from "../Chip/Chip";

const PolicyCard = ({
  status,
  startDate,
  customer,
  endDate,
  policyNumber,
  insuranceType,
  provider,
  createdAt,
}: AllPolicy) => {
  return (
    <div className=' w-5/6 lg:w-1/3 h-3/4 bg-gray-50 rounded-md transition-all border-2 border-opacity-40 border-featherPurple card'>
      <div className=' w-full flex flex-col  h-full'>
        <div className='flex justify-evenly shadow-sm h-2/5 w-full relative'>
          <Chip position='absolute top-7 right-10' status={status} />
          <img
            src={
              insuranceType === "HEALTH"
                ? health
                : insuranceType === "HOUSEHOLD"
                ? house
                : liability
            }
            alt='health-Insurance'
            className='h-full w-full object-fill'
          />
          <Chip position='absolute bottom-3 left-6' status={insuranceType} />
        </div>
        <hr className='w-5/6 border-featherDarkPurple border-bottom-6 mt-2 self-center border-opacity-30' />
        <div className='flex flex-col h-3/5'>
          <div className='flex h-3/5 w-full items-center justify-evenly py-10 '>
            <div className='flex flex-col space-y-8'>
              <FieldAndLabel content={provider} label='Provider' />
              <FieldAndLabel content={policyNumber} label='Policy Number' />
            </div>
            <div className='flex flex-col space-y-8'>
              <FieldAndLabel
                content={`${customer.firstName} ${customer.lastName}`}
                label='Customer'
              />
              <FieldAndLabel
                content={customer.dateOfBirth}
                label='Date of Birth'
              />
            </div>
          </div>
          <hr className='w-5/6 border-featherDarkPurple border-bottom-6 mt-2 self-center border-opacity-30' />
          <div className='h-2/5 w-full flex items-center px-5 justify-evenly'>
            <FieldAndLabel label='Start Date' content={startDate} />
            <FieldAndLabel label='End Date' content={endDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
