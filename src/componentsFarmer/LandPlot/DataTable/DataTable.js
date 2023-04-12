import React, { useState, useEffect } from "react";
import './DataTable.css';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablesource";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaRegEye } from "react-icons/fa";

const DataTable = () => {
  let navigate = useNavigate();

  const handleClick1 = (params) => {
    navigate("../../Trees", { state: { landid: params.row.land_id } });
  };
  

  const actionColumn = [
    {
      field: "action",
      headerName: "ACTION",
      width: 305,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton1" onClick={() => handleClick1(params)}>
              <FaRegEye className="icon" />
              &ensp;View Details
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
    let results = await fetch(`http://localhost:5050/lands/getLand`).then(
      (resp) => resp.json()
    );
    const convertedResults = results.map((obj) => {
      return {
        id: obj._id,
        land_id : obj.land_id,
        coord: obj.geo_loc,
        type: obj.sail_type,
        altitude: obj.alt,
        nb: obj.num_trees,
      };
    });
  
    setData(convertedResults);
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
export default DataTable;
