import "./index.css";
import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import CustomerPage from "./pages/Customer";
import Navbar from "./components/Navbar/Navbar";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IsAuthenticated from "./components/IsAuthenticated";
import { client } from ".";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='h-screen'>
        <Navbar />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={<IsAuthenticated />}>
            <Route path='/dashboard' element={<Home />} />
            <Route path='customer/:policyNumber' element={<CustomerPage />} />
            <Route path='policy/:policyNumber' element={<Policy />} />
          </Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
