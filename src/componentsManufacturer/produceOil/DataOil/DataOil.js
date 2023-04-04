import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns} from './dataoilsource';
import {FaTrashAlt} from 'react-icons/fa';



const DataOil = () => {


    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 107,
            renderCell: (params) => {
              return (
                <div className="cellAction">
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
export default DataOil;