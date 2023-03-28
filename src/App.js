import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Image from './components/Profile/Image';
import LandPlot from './components/LandPlot/LandPlot';
import DataTable from './components/LandPlot/DataTable/DataTable'
import Trees from './components/Trees/Trees';
import Harvest from './components/Harvest/Harvest';
import DataTree from './components/Trees/DataTree/DataTree';
import AddLandPlot from './components/LandPlot/AddLandPlot/AddLandPlot';
import AddTrees from './components/Trees/AddTrees/AddTrees';

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

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
