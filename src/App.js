import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DevelopeDashboard from './components/develope/DevelopeDashboard';

import Routes from './routes';

export default function App() {
    return (
        <div className='parentDiv'>
            <Router>
                <Routes className='default-search' />
            </Router>
        </div>
        // <DevelopeDashboard />
    );
}
