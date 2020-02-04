import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
} from 'react-router-dom';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div >
        <Route exact path="/"><DashboardContainer /></Route>
    </div>
);

export default App;