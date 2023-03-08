
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.css';
import {userColumns} from './datatablesource'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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

      
          
          
        
          const handleDelete = (id) => {
            setData(data.filter(item => item.id !== id))
          }
        
          const [data, setData] = useState([]);

          const loadPosts = async () => {
            let results = await fetch(`http://localhost:5050/lands/getLand`).then(resp => resp.json());
            const convertedResults = results.map(obj => {
              return {
                id: obj._id, 
                
                coord: obj.geo_loc,
                type: obj.sail_type,
                altitude: obj.alt,
                nb: obj.num_trees
              };
            });
            console.log(convertedResults);
            setData(convertedResults);
          };

useEffect(() => {
  loadPosts();
}, []);

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