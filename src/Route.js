import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next'

import "./App.css";
import NavbarHook from "./NavbarHook/NavbarHook";
import i18next from './services/i18next';

import Home from "./pages/Home";
import News from "./pages/News";
import Navbar from "./Navbar/Navbar";
import CSE from "./pages/courses/CSE/Cse";
import CSChapters from "./pages/courses/CSE/Chapters";
import Materials from "./pages/courses/CSE/Materials";

const Routing = () => {
    const { t } = useTranslation();

    const Wrapper = ({ children }) => {
        const location = useLocation();

        React.useLayoutEffect(() => {
            // Scroll to the top of the page when the route changes
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }, [location.pathname]);

        return children;
    };

    React.useEffect(() => {
        // for implementing the language change 
        i18next.changeLanguage('English');
    }, []);

    return (
        <Router>
            <Wrapper>
                {/* <Navbar /> */}
                <NavbarHook />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        {/* Define other Courses as routes*/}
                        <Route path="/ComputerScienceEngineering" element={<CSE />} />
                        <Route path="/ComputerScienceEngineeringChapters" element={<CSChapters />} />
                        <Route path="/BEEE" element={<Materials />} />
                    </Routes>
                </main>
            </Wrapper>
        </Router>
    );
};

export default Routing;
