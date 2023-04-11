import React,{useState} from 'react';
import './Manufacturer.css';
import NavBar from '../../NavBar/NavBar';
import DataTableM from './DataTableM/DataTableM'

function Manufacturer(){
    return(
        <>
            <NavBar/>
            <div className='container mx-auto'>
                <div className='titleAndButtonContainer'>
                    <p className='man'>Manufacturer Table</p>                    
                </div>
                    <DataTableM/>
                </div>
        </>
    )
}
export default Manufacturer