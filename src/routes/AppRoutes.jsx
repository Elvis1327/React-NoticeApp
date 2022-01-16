import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/shared/Navbar';
import Home from '../components/shared/Home';
import AppleNotice from '../components/notices/AppleNotices';
import NotFound from '../components/shared/NotFound';
import Footer from '../components/shared/Footer';
import TeslaNotice from '../components/notices/TeslaNotice';

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



