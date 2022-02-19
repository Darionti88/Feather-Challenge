import "./index.css";
import { useQuery } from "@apollo/client";
import { ALL_POLICIES, POLICY_ENUMS } from "./graphql/querys";
import { PolicyEnum } from "./interfaces/enums.interface";
import { policies } from "../../backend/src/mockData";
import { Policies } from "./interfaces/allPolicies.interface";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

function App() {
  const { data, error, loading } = useQuery(ALL_POLICIES);
  const policies: Policies = data;

  const headers: string[] = policies?.allPolicies.reduce(
    (acc: string[], curr) => {
      if (policies.allPolicies.indexOf(curr) === 0) {
        return Object.keys(curr);
      }
      return acc;
    },
    []
  );

  return (
    <div className='flex flex-col space-y-10 container mx-auto h-screen'>
      <Navbar />
      <Table headers={headers.slice(1)} data={data} />
    </div>
  );
}

export default App;
