import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const DataTableU = () => {


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
            <TableCell>January 1, 2022</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Harvest End Date</TableCell>
            <TableCell>February 28, 2022</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Harvest Method</TableCell>
            <TableCell>Hand-picked</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Produce Oil Date</TableCell>
            <TableCell>March 1, 2022</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Production Method</TableCell>
            <TableCell>Cold-pressed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Quality of the olives</TableCell>
            <TableCell>Extra virgin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Acidity level</TableCell>
            <TableCell>0.2%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Flavor and aroma</TableCell>
            <TableCell>Intense fruity flavor with a hint of pepper</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Color</TableCell>
            <TableCell>Golden green</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: 'rgb(70,89,69)', fontWeight: 'bold' }}>Packaging and labeling</TableCell>
            <TableCell>Bottled in dark glass to preserve freshness</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTableU;


