import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import * as IPFS from 'ipfs-core'




const DataTableU = () => {
  const [data,setData]= useState("");
  const IpfsHandle = async() => {
  
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hash = searchParams.get('hash');
    const ipfs = await IPFS.create();
  
      const stream = ipfs.cat(hash)
    const decoder = new TextDecoder()
    let da1ta = ''
    for await (const chunk of stream) {
      // chunks of data are returned as a Uint8Array, convert it back to a string
      da1ta += decoder.decode(chunk, { stream: true })
    }
    const parsedData = JSON.parse(da1ta);
    setData(parsedData);
    console.log(parsedData)
  }
 IpfsHandle();
 
  return (

    <TableContainer className='DataTable' style={{ height: 475, width: '50%', marginLeft:350 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Land Plot Location</TableCell>
            <TableCell>123 Main Street</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Harvest Start Date</TableCell>
            <TableCell>{data.Edate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Harvest End Date</TableCell>
            <TableCell>{data.Sdate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Harvest Method</TableCell>
            <TableCell>{data.method}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Planting Olive Date</TableCell>
            <TableCell>{data.plantingDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Quality of the olives</TableCell>
            <TableCell>{data["Quality of the olives"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Acidity level</TableCell>
            <TableCell>{data["Acidity level"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Flavor and aroma</TableCell>
            <TableCell>{data["Flavor and aroma"]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Color</TableCell>
            <TableCell>{data.Color}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Packaging and labeling</TableCell>
            <TableCell>{data["Packaging and labeling"]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTableU;


