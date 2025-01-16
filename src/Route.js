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
import Courses from "./pages/Courses";
import Chapters from "./pages/Chapters";
import Materials from "./pages/Materials";
import CourseData from "./pages/CourseData";

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
                        <Route path="/" element={<Courses />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/news" element={<News />} />


                        <Route path="/Courses" element={<Courses />} />
                        <Route path="/Courses/:courseName" element={<CourseData />} />
                        <Route path="/Courses/:courseName/Chapters" element={<Chapters />} />
                        <Route path="/Courses/:courseName/:chapterName" element={<Materials />} />


                    </Routes>
                </main>
            </Wrapper>
        </Router>
    );
};

export default Routing;
