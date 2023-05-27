import React, { useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';

const DataTableS = ({ onValidate }) => {
  // Initialize state for the table data
  const [tableData, setTableData] = useState([
    { id: 1, criteria: 'Quality of the olives', standard: 'Healthy, fresh, fully ripened', result: '' },
    { id: 2, criteria: 'Extraction process', standard: 'Modern and efficient equipment', result: '' },
    { id: 3, criteria: 'Acidity level', standard: 'Extra-virgin olive oil: < 0.8%; Virgin olive oil: < 2%', result: '' },
    { id: 4, criteria: 'Flavor and aroma', standard: 'Distinctive and pleasant', result: '' },
    { id: 5, criteria: 'Color', standard: 'Greenish-golden, free from sediment or cloudiness', result: '' },
    { id: 6, criteria: 'Packaging and labeling', standard: 'Complies with relevant standards and regulations', result: '' },
  ]);

  // Initialize state for the validation results
  const [validationResults, setValidationResults] = useState({
    isAllValid: false,
    invalidRows: []
  });

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

  // Handle validation when the "Validate" button is clicked
  const handleValidateClick = () => {
    const invalidRows = tableData.filter((row) => {
      const result = row.result.trim();
      return result === '' || result.toLowerCase() === 'fail';
    });

    const isAllValid = invalidRows.length === 0;

    setValidationResults({ isAllValid, invalidRows });

    if (onValidate) {
      onValidate(isAllValid);
    }
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
          style={{ width: '90%',border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',}}
        />
      ),
    },
  ];

  return (
    <div className='DataTable' style={{ height: 424, width: '100%' }}>
      <DataGrid rows={tableData} columns={columns} hideFooterPagination />

      {validationResults.isAllValid ? (
        <p>All results are valid!</p>
      ) : (
        <ul>
          {validationResults.invalidRows.map((row) => (
            <li key={row.id}>{`Row ${row.id}: ${row.criteria}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataTableS;
