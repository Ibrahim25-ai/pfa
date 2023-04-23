import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {userColumns} from './datatablesource'
import { useNavigate } from "react-router-dom";
import {FaTrashAlt,FaLeaf,FaRegEye} from 'react-icons/fa';




const DataTableI = () => {
  
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("../../Sheet");
  };
    

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 205,
            renderCell: (params) => {
              return (
                <div className="cellAction"> 
                    <div className='viewButton2'onClick={handleClick()}>Certification</div>
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
            
            let results = await fetch(`http://localhost:5050/lands/ProducedOil`).then(
              (resp) => resp.json()
            );
            const convertedResults = results.map((obj) => {
              
              return {
                id:obj.id,
              
  
                Pdate: obj.prod_date,
                quantity: obj.quantity,
                method: obj.prod_meth,
                temprature: obj.spt,
        
              };
            });
           
            //console.log(convertedResults);
            setData(convertedResults);
            console.log(convertedResults);
            
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
export default DataTableI;