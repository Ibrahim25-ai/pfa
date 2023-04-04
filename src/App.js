import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Profile from './componentsFarmer/Profile/Profile';
import Image from './componentsFarmer/Profile/Image';
import LandPlot from './componentsFarmer/LandPlot/LandPlot';
import DataTable from './componentsFarmer/LandPlot/DataTable/DataTable'
import Trees from './componentsFarmer/Trees/Trees';
import Harvest from './componentsFarmer/Harvest/Harvest';
import DataTree from './componentsFarmer/Trees/DataTree/DataTree';
import AddLandPlot from './componentsFarmer/LandPlot/AddLandPlot/AddLandPlot';
import AddTrees from './componentsFarmer/Trees/AddTrees/AddTrees';
import Table from './componentsManufacturer/Table/Table';
import PackageOil from './componentsManufacturer/packageOil/packageOil';
import ProduceOil from './componentsManufacturer/produceOil/produceOil';
import DataTableM from './componentsManufacturer/Table/DataTableM/DataTableM';
import DataOil from './componentsManufacturer/produceOil/DataOil/DataOil'
import AddOil from './componentsManufacturer/produceOil/DataOil/DataOil'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/NavBar" element={<NavBar/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Image" element={<Image/>} />
          <Route path="/LandPlot" element={<LandPlot/>} />
          <Route path="/DataTable" element={<DataTable/>} />
          <Route path="/Trees" element={<Trees/>} />
          <Route path="/Harvest" element={<Harvest/>} />
          <Route path="/DataTree" element={<DataTree/>} />
          <Route path="/AddLandPlot" element={<AddLandPlot/>} />
          <Route path="/AddTrees" element={<AddTrees/>} />
          <Route path="/Table" element={<Table/>} />
          <Route path="/PackageOil" element={<PackageOil/>} />
          <Route path="/ProduceOil" element={<ProduceOil/>} />
          <Route path="/DataTableM" element={<DataTableM/>} />
          <Route path="/DataOil" element={<DataOil/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
