import { useQuery } from "@apollo/client";
import { Params, useParams } from "react-router-dom";
import { GET_CUSTOMER } from "../graphql/querys";
import avatar from "../assets/images/avatar-placeholder.png";
import CustomerCard from "../components/Cards/CustomerCard";
import { AllPolicy } from "../interfaces/allPolicies.interface";

const CustomerPage = () => {
  const params: Readonly<Params<string>> = useParams();
  const policyNumber = params.policyNumber;
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: { policyNumber: Number(policyNumber) },
  });
  const myCustomer: Partial<AllPolicy> = data?.getPolicy;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='flex flex-col container mx-auto items-center justify-center h-full px-10'>
      <CustomerCard
        status={myCustomer.status}
        policyNumber={myCustomer.policyNumber}
        customer={myCustomer.customer}
      />
    </div>
  );
};

export default CustomerPage;
