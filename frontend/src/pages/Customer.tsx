import { useQuery } from "@apollo/client";
import { Params, useParams } from "react-router-dom";
import { GET_CUSTOMER } from "../graphql/querys";
import avatar from "../assets/images/avatar-placeholder.png";
import CustomerCard from "../components/Cards/CustomerCard";

const CustomerPage = () => {
  const params: Readonly<Params<string>> = useParams();
  const policyNumber = params.policyid;
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    skip: false,
    variables: { policyNumber: Number(policyNumber) },
  });
  const myCustomer = data?.getPolicy;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='flex flex-col container mx-auto items-center justify-center h-full px-10'>
      <CustomerCard
        status={myCustomer.status}
        avatar={avatar}
        policyNumber={myCustomer.policyNumber}
        firstName={myCustomer.customer.firstName}
        lastName={myCustomer.customer.lastName}
        dateOfBirth={myCustomer.customer.dateOfBirth}
      />
    </div>
  );
};

export default CustomerPage;
