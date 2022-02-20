import "./index.css";
import { useQuery } from "@apollo/client";
import { ALL_POLICIES } from "./graphql/querys";
import { Policies } from "./interfaces/allPolicies.interface";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import { useEffect } from "react";
import { useGetAllPolicies } from "./hooks/useGetPolicies";
import { policies } from "../../backend/src/mockData";

function App() {
  return (
    <div className='flex flex-col space-y-10 container mx-auto h-screen'>
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
