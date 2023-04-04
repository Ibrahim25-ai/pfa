import React, { useState } from 'react';

import NavBar from '../../NavBar/NavBar';
import DataOil from './DataOil/DataOil';
import { FaPlusCircle } from "react-icons/fa";
import AddOil from './AddOil/AddOil';
import Popup from '../../Popup';

function ProduceOil(){

    const [OpenPopup, setOpenPopup] = useState(false);
    

    return(
        <>
            <NavBar/>
            <div className='container mx-auto'>
                <div className='titleAndButtonContainer'>
                    <p className='land'>Produce Oil</p>     
                    <button className='addButtonn' onClick={() => setOpenPopup(true)}><FaPlusCircle/>&ensp;Add</button>               
                </div>
                <DataOil/>
            </div>
            <Popup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} >
                <AddOil/>
            </Popup>
        </>
    )
}

export default ProduceOil;
