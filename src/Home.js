import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <h1 className="Home-title">Jobly</h1>
            <p className="Home-description">All the jobs in one convenient place.</p>
            <Link to="/signup" className="Home-button">Sign Up</Link>
            <Link to="/login" className="Home-button">Login</Link>
        </div>
    );
}

export default Home;