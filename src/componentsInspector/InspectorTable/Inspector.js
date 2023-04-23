import React,{useState} from 'react';

import NavBar from '../../NavBar/NavBar';
import DataTableI from './DataTableI/DataTableI'

function Inspector(){
    return(
        <>
            <NavBar/>
            <div className='container mx-auto'>
                <div className='titleAndButtonContainer'>
                    <p className='man'>Inspector Table</p>                    
                </div>
                    <DataTableI/>
                </div>
        </>
    )
}
export default Inspector