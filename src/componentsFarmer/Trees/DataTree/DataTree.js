import React, { useState,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTree.css';
import {FaLeaf, FaTrashAlt} from 'react-icons/fa';
import {userColumns} from '../datatreesource'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const DataTree = () => {
  let navigate = useNavigate();
  const handleClick2 = (params) => {
    navigate("../../Harvest", { state: { oliveid: params.row.tree_id } });
  };

    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 170,
            renderCell: (params) => {
              
              return (
                <div className="cellAction">
                  <div
                    className="viewButton2"
                    onClick={() => handleClick2(params)}
                  >
                    <FaLeaf className="icon" />
                    &ensp;Harvest
                  </div>
                  <div className="cellAction">
                    <div
                      className="deleteButton"
                      onClick={() => handleDelete(params.row)}
                    >
                      <FaTrashAlt />
                      &ensp;Delete
                    </div>
                  </div>
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
                tree_id:obj.olive_id,
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