import React, { useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';






const DataTableS = () => {
    // Initialize state for the table data
  const [tableData, setTableData] = useState([
    { id: 1, criteria: 'Quality of the olives', standard: 'Healthy, fresh, fully ripened', result: '' },
    { id: 2, criteria: 'Extraction process', standard: 'Modern and efficient equipment', result: '' },
    { id: 3, criteria: 'Acidity level', standard: 'Extra-virgin olive oil: < 0.8%; Virgin olive oil: < 2%', result: '' },
    { id: 4, criteria: 'Flavor and aroma', standard: 'Distinctive and pleasant', result: '' },
    { id: 5, criteria: 'Color', standard: 'Greenish-golden, free from sediment or cloudiness', result: '' },
    { id: 6, criteria: 'Packaging and labeling', standard: 'Complies with relevant standards and regulations', result: '' },
  ]);

  // Handle changes to the table cell data
  const handleTableCellChange = (params, event) => {
    const updatedData = tableData.map((row) => {
      if (row.id === params.id) {
        return { ...row, [params.field]: event.target.value };
      }
      return row;
    });
    setTableData(updatedData);
  };
  

  // Define the columns of the DataGrid
  const columns = [
    { field: 'criteria', headerName: 'Criteria', width: 300 },
    { field: 'standard', headerName: 'Standard', width: 500 },
    {
      field: 'result',
      headerName: 'Result',
      width: 475,
      renderCell: (params) => (
        <input
          type="text"
          value={params.value}
          onChange={(event) => handleTableCellChange(params, event)}
          style={{ width: '90%' }}
        />
      ),
    },
  ];     
            

           
           

          

return (
    <div className='DataTable' style={{ height: 424, width: '100%' }}>
          <DataGrid rows={tableData} columns={columns} hideFooterPagination />
    </div>
)
}
export default DataTableS;