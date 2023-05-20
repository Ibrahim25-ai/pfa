import React from 'react';
import logo from '../images/logo.png'
import DataTableU from './DataTableU';

const User = () => {

    return (
        <>

                <nav id='navbar'>
                    <div className='logo' style={{ display: "flex", alignItems: "left" }}>
                        <img src={logo} alt='avatar' className='md:cursor-ponter h-9'/>
                    </div>                 
                </nav>
                <br/>

                <DataTableU/>
            
        </>
      );
    };
    
export default User;
