import React from 'react';
import './LandPlot.css';
import NavBar from '../NavBar/NavBar';
import DataTable from './DataTable/DataTable'


function LandPlot(){
    return(
            <div>
                <NavBar/>
                <div className='container mx-auto'>
                    <p className='land'>Land Plots</p>
                    <DataTable/>
                </div>
            </div>
    )
}
export default LandPlot