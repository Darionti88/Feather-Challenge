import { useQuery } from "@apollo/client";
import { Params, useParams } from "react-router-dom";
import { GET_CUSTOMER } from "../graphql/querys";
import CustomerCard from "../components/Cards/CustomerCard";
import { AllPolicy } from "../interfaces/allPolicies.interface";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading/Loading";

const CustomerPage = () => {
  const params: Readonly<Params<string>> = useParams();
  const policyNumber = params.policyNumber;
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: { policyNumber: Number(policyNumber) },
  });
  const myCustomer: Partial<AllPolicy> = data?.getPolicy;

  if (loading) return <Loading />;
  if (error) {
    return <Modal error={error} />;
  }

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
