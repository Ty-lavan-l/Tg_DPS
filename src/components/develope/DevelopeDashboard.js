import React from 'react';
import './developeDashboard.css';
import EditorTab from './resources/EditorTab';
import Tab from './resources/Tab';
function DevelopeDashboard() {
    return (
        <div className='container'>
            <div className='quary'>
                <EditorTab />
            </div>
            <div className='result'>
                <Tab />
            </div>
        </div>
    );
}

export default DevelopeDashboard;
