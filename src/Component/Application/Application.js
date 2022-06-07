import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ApplicationTopver from './ApplicationTopver';

const Application = () => {
    return (
        <div>
            <ApplicationTopver>
                <Outlet></Outlet>
            </ApplicationTopver>
        </div>
        
    );
};

export default Application;