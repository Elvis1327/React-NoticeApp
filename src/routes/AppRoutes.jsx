import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/shared/Navbar';
import Home from '../components/shared/Home';
import AppleNotice from '../components/notices/AppleNotices';
import NotFound from '../components/shared/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/apple" component={AppleNotice} />
                    <Route exact path="/" component={Home} />
                    <Route exact path ="*" component={NotFound} /> 
                </Switch>
            </div>
        </Router>
    )
}
export default AppRouter;



