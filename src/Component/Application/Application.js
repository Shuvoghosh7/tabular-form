import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ApplicationTopver from './ApplicationTopver';

const Application = () => {
    return (
        <div className='bg-base-300'>
            <ApplicationTopver>
                <p className='text-center text-2xl font-bold text-primary'>Wellcome loan application process. </p>
                <Outlet></Outlet>
            </ApplicationTopver>
        </div>
        
    );
};

export default Application;