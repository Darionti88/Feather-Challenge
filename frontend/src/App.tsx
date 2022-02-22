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
        <Route path='customer/:policyNumber' element={<CustomerPage />} />
        <Route path='policy/:policyNumber' element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
