import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {userColumns} from './datatablesource'
import { useNavigate } from 'react-router-dom';
import {FaTrashAlt,FaLeaf,FaRegEye} from 'react-icons/fa';




const DataTableI = () => {

    

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 205,
            renderCell: (params) => {
              return (
                <div className="cellAction"> 
                    <div className='viewButton2'>Certification</div>
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
export default DataTableI;