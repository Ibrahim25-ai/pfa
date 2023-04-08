import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTree.css';
import {FaTrashAlt} from 'react-icons/fa';
import {userColumns} from '../datatreesource'
import { useLocation } from 'react-router-dom';

const DataTree = () => {


    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 110,
            renderCell: (params) => {
              
              return (
                <div className="cellAction">
                    <div className='deleteButton'  onClick={()=>handleDelete(params.row)}><FaTrashAlt/>&ensp;Delete</div>
                </div>

              );
            }
          }
        ]

        const [data, setData] = useState([]);
        const handleDelete=(row) =>{
            const nbToDelete = parseInt(prompt("How many trees do you want to delete?"));
            if(!isNaN(nbToDelete)){
                const index = data.findIndex(item => item.id === row.id);
                const nb = parseInt(data[index].nb);
                if(nbToDelete > nb){
                    alert("You cannot delete more trees than the quantity");
                } else {
                    setData(prevData => prevData.map(item =>{
                        if (item.id === row.id) {
                            const nb = parseInt(item.nb) - nbToDelete;
                            return {...item, nb: nb.toString()};
                        }
                        return item;
                    }));
                }
            }
        };

        const location = useLocation();
        const { landid } = location.state;
        
        const loadTrees = async () => {
            
            const requestBody = {
              id: landid
            };

            
            console.log(landid);
                const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
              };
              let results = await fetch(`http://localhost:5050/lands/getTrees`, options).then(resp => resp.json());
              const convertedResults = results.map(obj => {
              return {
                id: obj._id, 
                type: obj.oliveVariety,
                date: obj.plantDate,
                nb: obj.nbTrees
              };
            });
            console.log(convertedResults);
            setData(convertedResults);
        };

useEffect(() => {
loadTrees();
}, []);
    return (
        <div className='DataTree'>
                <DataGrid className="dataGrid"
                    style={{ height: '100%'}}
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    autoHeight={true}
                    
                />
        
      </div>
    )
}
export default DataTree;