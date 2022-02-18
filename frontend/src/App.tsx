import "./index.css";
import { useQuery } from "@apollo/client";
import {
  ALL_POLICIES,
  FILTERED_POLICIES,
  POLICY_ENUMS,
} from "./graphql/querys";
import { PolicyEnum } from "./interfaces/enums.interface";
import { policies } from "../../backend/src/mockData";
import { Policies } from "./interfaces/allPolicies.interface";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import { FilteredPolicies } from "./interfaces/filteredPolicies";

function App() {
  const { data, error, loading, refetch } = useQuery(FILTERED_POLICIES);
  const policies: FilteredPolicies = data;

  const headers: string[] = policies?.filterPolicies.reduce(
    (acc: string[], curr) => {
      if (policies.filterPolicies.indexOf(curr) === 0) {
        return Object.keys(curr);
      }
      return acc;
    },
    []
  );

  if (loading) return <div className='Text-2xl'>Loading...</div>;

  return (
    <div className='flex flex-col space-y-10 container mx-auto h-screen'>
      <Navbar />
      <Table headers={headers?.slice(1)} data={data} refetch={refetch} />
    </div>
  );
}

export default App;
