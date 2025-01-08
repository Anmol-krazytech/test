import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next'

import "./App.css";
import NavbarHook from "./NavbarHook/NavbarHook";
import i18next from './services/i18next';

import Home from "./pages/Home";
import News from "./pages/News";
import Navbar from "./Navbar/Navbar";
import CSE from "./pages/courses/Cse";

const Routing = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        // for implementing the language change 
        i18next.changeLanguage('English');
    }, []);

    return (
        <Router>
            {/* <Navbar /> */}
            <NavbarHook />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    {/* Define other Courses as routes*/}
                    <Route path="/ComputerScienceEngineering" element={<CSE />} />
                </Routes>
            </main>
        </Router>
    );
};

export default Routing;
