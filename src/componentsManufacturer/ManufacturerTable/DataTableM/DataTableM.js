import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {userColumns} from './datatablesource'
import { useNavigate } from 'react-router-dom';
import {FaTrashAlt,FaLeaf,FaRegEye} from 'react-icons/fa';

import AddOil from '../../AddOil/AddOil';
import Popup from '../../../Popup';


const DataTableM = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('../../packageOil');
    };

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 285,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                    <div className='viewButton1' onClick={() => setOpenPopup(true)}>Produce Oil</div> 
                    <div className='viewButton2' onClick={handleClick}>Package Oil</div>
                    <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}><FaTrashAlt/>&ensp;Delete</div>
                </div>

              );
            },
          }
        ]

        
        

        const handleDelete = (id) => {
            setData(data.filter(item => item.id !== id))
          }
        
          const [data, setData] = useState([]);
          

          const loadPosts = async () => {
            
            let results = await fetch(`http://localhost:5050/lands/getHarvest`).then(
              (resp) => resp.json()
            );
            const convertedResults = results.map((obj) => {
              return {
                id:obj._id,
                plotL: obj.geo_loc,
                Sdate: obj.Harvest_SDate,
                Edate: obj.Harvest_EDate,
                method: obj.Harvest_Method,
                weight: obj.Total_Weight,
              };
            });
            console.log(convertedResults);
            setData(convertedResults);
          };
        
          useEffect(() => {
            loadPosts();
          }, []);

          const [OpenPopup, setOpenPopup] = useState(false);

return (
  <div className='DataTable'>
    <DataGrid
      style={{ height: 423 }}
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={6}
      rowsPerPageOptions={[6]}
    />
    <Popup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} >
      <AddOil/>
    </Popup>
  </div>
)
}
export default DataTableM;