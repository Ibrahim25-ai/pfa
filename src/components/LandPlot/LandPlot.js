import React,{useState} from 'react';
import './LandPlot.css';
import NavBar from '../NavBar/NavBar';
import DataTable from './DataTable/DataTable'
import { FaPlusCircle } from "react-icons/fa";
import Popup from '../Popup';
import AddLandPlot from './AddLandPlot/AddLandPlot';


function LandPlot(){

    const [OpenPopup, setOpenPopup] = useState(false);

    return(
            <div>
                <NavBar/>
                <div className='container mx-auto'>
                <div className='titleAndButtonContainer'>
                    <p className='land'>Land Plots</p>
                    <button className='addButtonn'onClick={() => setOpenPopup(true)}><FaPlusCircle/>&ensp;Add</button>
                </div>
                    
                    <DataTable/>
                </div>
                <Popup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} >
                    <AddLandPlot/>
                </Popup>
            </div>
    )
}
export default LandPlot