import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <Link to="/" className="Navbar-logo">Jobly</Link>
                <Link to="/signup" className="Navbar-link">Sign Up</Link>
                <Link to="/login" className="Navbar-link">Login</Link>
                <Link to="/companies" className="Navbar-link">Companies</Link>
                <Link to="/jobs" className="Navbar-link">Jobs</Link>
                <Link to="/profile" className="Navbar-link">Profile</Link>
            </nav>
        </div>
    );
}

export default Navbar;