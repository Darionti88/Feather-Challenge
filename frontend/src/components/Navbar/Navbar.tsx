import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className='container mx-auto '>
      <NavLink to='/' className='flex p-3 items-center'>
        <img src={logo} alt='feather-logo' className='h-12' />
        <h3 className='text-xl md:text-4xl px-3'>Pluma</h3>
      </NavLink>
    </nav>
  );
};

export default Navbar;
