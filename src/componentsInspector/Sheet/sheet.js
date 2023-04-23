import React, { useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import DataTableS from './DataTableS/DataTableS';
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

const Sheet = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("../Inspector");
    };

  return (
    <>
      <NavBar />
      <div className='container mx-auto'>
        <div className='titleAndButtonContainer'>
        <p className="man" style={{ marginLeft: 500 }}>Olive Oil Inspection Sheet</p>
          <button className='addButtonn'onClick={() => handleClick()}><FaRegCheckCircle/>&ensp;Valid</button>
        </div>
        <div>
            <DataTableS/>
        </div>

      </div>
    </>
  );
};

export default Sheet;
