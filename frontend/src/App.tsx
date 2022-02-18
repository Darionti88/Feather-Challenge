import "./index.css";
import { useQuery } from "@apollo/client";
import { ALL_POLICIES, POLICY_ENUMS } from "./graphql/querys";
import { PolicyEnum } from "./interfaces/enums.interface";
import { policies } from "../../backend/src/mockData";
import { Policies } from "./interfaces/allPolicies.interface";

function App() {
  const { data, error, loading } = useQuery(ALL_POLICIES);
  const policies: Policies = data;
  const policy = policies?.allPolicies.map(
    (policy) => policy.customer.firstName
  );
  console.log(policy);

  console.log(data);
  return <h1 className='text-3xl'>Fullstack code challenge</h1>;
}

export default App;
