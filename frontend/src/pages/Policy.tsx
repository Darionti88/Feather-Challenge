import { useQuery } from "@apollo/client";
import { Params, useParams } from "react-router-dom";
import PolicyCard from "../components/Cards/PolicyCard";
import Loading from "../components/Loading/Loading";
import Modal from "../components/Modal/Modal";
import { GET_POLICY } from "../graphql/querys";
import { AllPolicy } from "../interfaces/allPolicies.interface";

const Policy = () => {
  const params: Readonly<Params<string>> = useParams();
  const policyNumber = params.policyNumber;
  const { data, loading, error } = useQuery(GET_POLICY, {
    variables: { policyNumber: Number(policyNumber) },
  });
  const myPolicy: AllPolicy = data?.getPolicy;
  if (loading) return <Loading />;
  if (error) {
    return <Modal error={error} />;
  }

  return (
    <div className='flex flex-col container mx-auto items-center justify-center h-full px-10'>
      <PolicyCard {...myPolicy} />;
    </div>
  );
};

export default Policy;
