import React, { useEffect, useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import DataTableS from './DataTableS/DataTableS';
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import Web3 from 'web3';
import truffleContract from 'truffle-contract';
import SupplyChain from '../../contracts/SupplyChain.json';
import * as IPFS from 'ipfs-core'

const Sheet = () => {
  const location = useLocation();
  const { oliveid } = location.state;
 
  let navigate = useNavigate();
  const [validationData, setValidationData] = useState({});
  const [data, setData] = useState({});
  const handleClick = async () => {
   
    // Get the data from the table and store it in state
    
 

  

    const data = getDataFromTable();
    setValidationData(data);
   
    const provider = window.ethereum;
    const web3 = new Web3(provider);
    await provider.enable();
    const contract = truffleContract(SupplyChain);
    contract.setProvider(provider);
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];
    
    
    
    const instance = await contract.deployed();
    /* get the data to be inserted in the ipfs to make the hash */
    // let results = await fetch(`http://localhost:5050/lands/getHarvest`).then(
    //   (resp) => resp.json()
    // );
    
  try {
    
    instance.getPastEvents('OliveHarvested', {
      filter: { _oliveID: oliveid },
  fromBlock: 0,
  toBlock: 'latest'
}, function(error, events){ console.log(events);
 })
.then(async function(events){

  const convertedResults = 
      {
        ...data,
        id:events[0].args[1].oliveID,
        oliveVariety: events[0].args[1].oliveVariety,        
        Sdate: events[0].args[1].harvStarDate,
        Edate: events[0].args[1].harvEndDate,
        method: events[0].args[1].harvMeth,
        plantingDate: events[0].args[1].plantingDate,
        ownerID: events[0].args[1].ownerID,
    
      };
  
    

    const ipfs = await IPFS.create();
    const json = JSON.stringify(convertedResults);
    const { cid } = await ipfs.add(json);
    console.log(cid.toString());
    const stream = ipfs.cat(cid)
  const decoder = new TextDecoder()
  let da1ta = ''
  for await (const chunk of stream) {
    // chunks of data are returned as a Uint8Array, convert it back to a string
    da1ta += decoder.decode(chunk, { stream: true })
  }
  
     /* inserted in the smart contract to get the hash*/
     await instance.createCertification(oliveid,convertedResults.ownerID.toString(),"test",convertedResults.Sdate.toString(),convertedResults.Edate.toString(), cid.toString(), { from: owner });
     window.location.replace("http://localhost:3000/inspector");
    });
    } catch (err) {
    console.error(err);
  }
   
  };


  const getDataFromTable = () => {
    const rows = document.querySelectorAll('.MuiDataGrid-row');
    const data = {};

    rows.forEach((row) => {
      const cells = row.querySelectorAll('.MuiDataGrid-cell');
      const criteria = cells[0].innerText;
      const result = cells[2].querySelector('input').value;

      data[criteria] = result;
    });

    return data;
  };

  return (
    <>
      <NavBar />
      <div className='container mx-auto'>
        <div className='titleAndButtonContainer'>
          <p className="man" style={{ marginLeft: 500 }}>Olive Oil Inspection Sheet</p>
          <button className='addButtonn' onClick={() => handleClick()}><FaRegCheckCircle/>&ensp;Valid</button>
        </div>
        <div>
          <DataTableS />
        </div>
      </div>
    </>
  );
};

export default Sheet;