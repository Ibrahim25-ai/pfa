import React from 'react';
import './Trees.css';
import NavBar from '../NavBar/NavBar';
import DataTree from './DataTree/DataTree'


function Trees(){


    return(
            <div>
                <NavBar/>
                <div className='headerContainer '>
                    <div className='titleAndButtonContainer'>
                        <p className='tree'>Olive Trees</p>
                        <button className='addButton'>Add</button>
                </div>
                    <DataTree/>
                    
                    </div>
            </div>
    );
}
export default Trees
