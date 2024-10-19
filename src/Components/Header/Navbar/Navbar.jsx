import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-1 bg-gray-800 text-white">
            <h1 className="text-lg">Weather</h1>
            <ul className="flex space-x-4">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about" target="_blank" rel="noopener noreferrer">About Project</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
