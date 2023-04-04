import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {userColumns} from './datatablesource'
import { useNavigate } from 'react-router-dom';
import {FaTrashAlt,FaLeaf,FaRegEye} from 'react-icons/fa';


const DataTable = () => {

    let navigate = useNavigate();
    const handleClick1 = () => {
        navigate('../../produceOil');
    };

    const handleClick2 = () => {
        navigate('../../packageOil');
    };

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 235,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                    <div className='viewButton1' onClick={handleClick1}>Produce Oil</div>
                    <div className='viewButton2' onClick={handleClick2}>Package Oil</div>
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

return (
  <div className='DataTable'>
    <DataGrid
      style={{ height: 423 }}
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={6}
      rowsPerPageOptions={[6]}
    />
  </div>
)
}
export default DataTable;