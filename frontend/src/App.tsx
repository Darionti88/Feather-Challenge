import "./index.css";
import { useQuery } from "@apollo/client";
import { FILTERED_POLICIES } from "./graphql/querys";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import { FilteredPolicies } from "./interfaces/filteredPolicies";

function App() {
  const { data, fetchMore, loading, refetch } = useQuery(FILTERED_POLICIES);

  const policies: FilteredPolicies = data;
  const headers: string[] = policies?.filterPolicies.reduce(
    (acc: string[], curr) => {
      if (policies.filterPolicies.indexOf(curr) === 0) {
        return Object.keys(curr).slice(1);
      }
      return acc;
    },
    []
  );
  if (loading) return <div className='Text-2xl'>Loading...</div>;

  return (
    <div className='flex flex-col space-y-10 container mx-auto h-screen'>
      <Navbar />
      <Table headers={headers} data={data} refetch={refetch} />
    </div>
  );
}

export default App;
