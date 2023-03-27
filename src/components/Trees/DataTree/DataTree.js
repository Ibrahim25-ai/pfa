import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTree.css';
import {FaTrashAlt} from 'react-icons/fa';
import {userColumns, userRows} from '../datatreesource'


const DataTree = () => {


    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 117,
            renderCell: (params) => {
              const rowId = params.id; // récupérer l'ID de la ligne
              return (
                <div className="cellAction">
                    <div className='deleteButton'  onClick={()=>handleDelete(params.row)}><FaTrashAlt/>&ensp;Delete</div>
                </div>

              );
            }
          }
        ]

        const [data,setData] = useState(userRows);

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

        const dynamicHeight = Math.min(data.length * 6 + 8.5, 80) + 'vh'

    return (
        <div className='DataTree'>
                <DataGrid className="dataGrid"
                    style={{ height: '100%'}}
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    autoHeight={true}
                    height={dynamicHeight}
                />
        
      </div>
    )
}
export default DataTree;