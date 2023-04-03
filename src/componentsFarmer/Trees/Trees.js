import React, { useState } from 'react';
import './Trees.css';
import NavBar from '../../NavBar/NavBar';
import DataTree from './DataTree/DataTree';
import { FaPlusCircle } from 'react-icons/fa';
import Popup from '../../Popup';
import AddTrees from '../Trees/AddTrees/AddTrees'

function Trees() {
  const [OpenPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <NavBar />
      <div className='headerContainer'>
        <div className='titleAndButtonContainer'>
          <p className='tree'>Olive Trees</p>
          <button className='addButton' onClick={() => setOpenPopup(true)}>
            <FaPlusCircle /> &ensp;Add
          </button>
        </div>
        <DataTree />
      </div>
      <Popup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} >
        <AddTrees/>
      </Popup>
    </div>
  );
}

export default Trees;
