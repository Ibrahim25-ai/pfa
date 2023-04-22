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

  const handleClick2 = () => {
    navigate("../../packageOil");
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "ACTION",
      width: 285,
      renderCell: (params,test) => {
        return (
          <div className="cellAction">
            <div>
              { params.row.method === "meth1" && (
                <div
                  className="viewButton1"
                  onClick={() => handleClick1(params)}
                >
                  Produce Oil
                </div>
              )}
            </div>
            <div className="viewButton2" onClick={handleClick2}>
              Package Oil
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
        id: obj.olive_id,
        plotL: obj.geo_loc,
        Sdate: obj.Harvest_SDate,
        Edate: obj.Harvest_EDate,
        method: obj.Harvest_Method,
        weight: obj.Total_Weight,
      };
    });
    console.log(convertedResults);
    setData(convertedResults);
    console.log(results);
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
