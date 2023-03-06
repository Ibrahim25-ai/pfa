import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.css';
import {userColumns, userRows} from './datatablesource'
import { useNavigate } from 'react-router-dom';

const DataTable = () => {

    let navigate = useNavigate();
    const handleClick1 = () => {
        navigate('../../Trees');
    };

    const handleClick2 = () => {
        navigate('../../Harvest');
    };

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 305,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                    <div className='viewButton1' onClick={handleClick1}>View Details</div>
                    <div className='viewButton2' onClick={handleClick2}>Harvest</div>
                    <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>

              );
            },
          }
        ]

        const [data,setData] = useState(userRows)
        const handleDelete=(id) =>{
            setData(data.filter(item =>item.id !== id ))
        }

        const dynamicHeight = Math.min(data.length * 6 + 8.5, 80) + 'vh'

    return (
        <div className='DataTable'>
            <DataGrid style={{height: 423}}
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={6}
            rowsPerPageOptions={[6]}
            />
        </div>
    )
}
export default DataTable;