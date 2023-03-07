export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'coord', headerName: 'Geographic Location', width: 300 },
  { field: 'type', headerName: 'Soil Type', width: 200 },
  { field: 'altitude', headerName: 'Altitude', width: 200 },
  { field: 'nb', headerName: 'Number of Trees', width: 200 }
];


const loadPosts =  async () => {
  const test=[];
  let results = await fetch(`http://localhost:5050/lands/getLand`).then(resp => test.push(resp.json()));
  console.log(test);
}
export const userRows = loadPosts();
