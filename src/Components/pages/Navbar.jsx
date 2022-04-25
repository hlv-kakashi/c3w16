import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <NavLink to="/">Home</NavLink>
        
    <NavLink to="/about">About</NavLink>
    {token ? <NavLink to="/logout">LogOut</NavLink> :  <NavLink to="/login">Login</NavLink> }
    <NavLink to="/books">Books</NavLink>
        
      </nav>
    </>
  );
};
