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
import Manufacturer from './componentsManufacturer/ManufacturerTable/Manufacturer';
import PackageOil from './componentsManufacturer/packageOil/packageOil';
import DataTableM from './componentsManufacturer/ManufacturerTable/DataTableM/DataTableM';
import AddOil from './componentsManufacturer/AddOil/AddOil'
import Inspector from './componentsInspector/InspectorTable/Inspector';
import DataTableI from './componentsInspector/InspectorTable/DataTableI/DataTableI';
import Sheet from './componentsInspector/Sheet/sheet'
import DataTableS from './componentsInspector/Sheet/DataTableS/DataTableS';
import User from './componentsUser/User';
import DataTableU from './componentsUser/DataTableU'

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
          <Route path="/Manufacturer" element={<Manufacturer/>} />
          <Route path="/PackageOil" element={<PackageOil/>} />
          <Route path="/DataTableM" element={<DataTableM/>} />
          <Route path="/AddOil" element={<AddOil/>} />
          <Route path="/Inspector" element={<Inspector/>} />
          <Route path="/DataTableI" element={<DataTableI/>} />
          <Route path="/Sheet" element={<Sheet/>} />
          <Route path="/DataTableS" element={<DataTableS/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/DataTableU" element={<DataTableU/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
