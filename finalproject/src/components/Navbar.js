import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
    return (
        
        <nav className="navbar">
            <div className="container">
            
            <a href="/"> <h3 className="logo">ВЕСТА</h3> </a>

            <ul className="nav-links">
            <Link to='/'> <li>ГЛАВНАЯ</li></Link>
            <Link to='/collection'> <li>КОЛЛЕКЦИЯ</li></Link>
            <Link to='/lookbook'> <li>ЛУКБУК</li></Link>
            <Link to='/blog'> <li>БЛОГ</li></Link>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;