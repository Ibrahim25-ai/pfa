import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "./datatablesource";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const DataTableM = () => {
  let navigate = useNavigate();

  const handleClick1 = (params) => {
    navigate("../../AddOil", { state: { oliveid: params.row.id } });
  };



  const actionColumn = [
    {
      field: "action",
      headerName: "ACTION",
      width: 235,
      renderCell: (params,test) => {
        return (
          <div className="cellAction">
            <div>
              { !params.row.produced  && (
                <div
                  className="viewButton1"
                  onClick={() => handleClick1(params)}
                >
                  Produce Oil
                </div>
              )}
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <FaTrashAlt />
              &ensp;Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [data, setData] = useState([]);


          const loadPosts = async () => {
            
            let results = await fetch(`http://localhost:5050/lands/getHarvest`).then(
              (resp) => resp.json()
            );
            const convertedResults = results.map((obj) => {
              return {
                id:obj.olive_id,
                plotL: obj.landPlot_location,
                Sdate: obj.Harvest_SDate,
                Edate: obj.Harvest_EDate,
                method: obj.Harvest_Method,
                weight: obj.Total_Weight,
                name: obj.farmer_name,
                produced: false, 
              };
            });
            let results1 = await fetch(`http://localhost:5050/lands/ProducedOil`).then(
              (resp) => resp.json()
            );
            convertedResults.forEach((obj) => {
              if (results1.some((item) => item.id === obj.id)) {
                obj.produced = true;
              }
            });
            //console.log(convertedResults);
            setData(convertedResults);
            console.log(convertedResults);
            console.log(results1);
          };
        
          useEffect(() => {
            loadPosts();
          }, []);

  return (
    <div className="DataTable">
      <DataGrid
        style={{ height: 423 }}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
    </div>
  );
};
export default DataTableM;
