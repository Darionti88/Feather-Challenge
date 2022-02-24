import { Button } from "@popsure/dirty-swan";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useIsLogged } from "../../hooks/useIsLogged";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate("/login");
  };

  return (
    <nav className='container mx-auto flex items center w-full justify-between p-5 '>
      <NavLink to='/dashboard' className='flex items-center'>
        <img src={logo} alt='feather-logo' className='h-12' />
        <h3 className='text-xl md:text-4xl px-3'>Pluma</h3>
      </NavLink>
      <Button onClick={handleLogout} buttonTitle='Log Out' />
    </nav>
  );
};

export default Navbar;
