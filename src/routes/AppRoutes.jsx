import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Footer, Navbar, Home, NotFound } from '../pages/shared/index';
import { AppleNotice, TeslaNotice } from '../pages/notices/index';


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/apple" element={<AppleNotice />} />
                    <Route path="/tesla" element={<TeslaNotice />} />
                    <Route path="/" element={<Home />} />
                    <Route path ="*" element={<NotFound />} /> 
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}
export default AppRouter;



