import { Params, useParams } from "react-router-dom";
import { AllPolicy } from "../interfaces/allPolicies.interface";

const Customer = () => {
  const { policyid }: Readonly<Params<string>> = useParams();
  return (
    <div className='flex flex-col space-y-10 container mx-auto h-screen'></div>
  );
};

export default Customer;
