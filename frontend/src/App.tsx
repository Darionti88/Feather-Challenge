import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomerPage from "./pages/Customer";
import Navbar from "./components/Navbar/Navbar";
import Policy from "./pages/Policy";

function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='customer/:policyid' element={<CustomerPage />} />
        <Route path='policy/:policyid' element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
