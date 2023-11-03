import React from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import "./Navbar.css";


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar">     
                <li>           
                    <Link to="/">Home</Link>         
                </li>         
                <li>           
                    <Link to="/Music">My Music</Link>         
                </li>         
                <li>           
                    <Link to="/About">About</Link>         
                </li>       
            </ul>   
        </nav>   
    ); 
} 
export default Navbar;