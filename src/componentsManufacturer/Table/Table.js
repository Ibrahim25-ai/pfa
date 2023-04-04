import React,{useState} from 'react';
import './Table.css';
import NavBar from '../../NavBar/NavBar';
import DataTableM from './DataTableM/DataTableM'

function Table(){
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
export default Table