import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Header/Pages/Home";
import AboutProject from "./Components/Header/Pages/AboutProject";

const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<AboutProject/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
