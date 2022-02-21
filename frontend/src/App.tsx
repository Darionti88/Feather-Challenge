import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='customer/:policyid' element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
