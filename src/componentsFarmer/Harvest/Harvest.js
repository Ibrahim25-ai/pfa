import React, {useState} from 'react';
import './Harvest.css'
import NavBar from '../../NavBar/NavBar';
import Web3 from 'web3';
import truffleContract from 'truffle-contract';
import { useLocation } from 'react-router-dom';
import SupplyChain from './SupplyChain.json';


function Harvest() {
  const location = useLocation();
  const { oliveid } = location.state;
  const [Dval,setDval]= useState("");
  const [Eval,setEval]= useState("");
  const [Tval,setTval]= useState("");
  const [Mval,setMval]= useState("");
  const [Sval,setSval]= useState("");



  const handlesubmit = async (event) =>  {
    event.preventDefault();
    const provider = window.ethereum;
    const web3 = new Web3(provider);
    await provider.enable();

    const contract = truffleContract(SupplyChain);
    contract.setProvider(provider);

    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];

    try {
      const instance = await contract.deployed();
        console.log(oliveid)
      await instance.oliveHarvestItem(oliveid, { from: owner });
      
    const data = {
      olive_id: oliveid,
      Harvest_SDate: Dval,
      Harvest_EDate: Eval,
      Harvest_Method: Mval,
      Storage_Temperature: Sval,
      Total_Weight: Tval,
    };
  
    fetch("http://localhost:5050/lands/addharvest", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.replace("http://localhost:3000/landplot");
      })
      .catch(error => {
        console.error(error);
        // handle the error
      });
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div>
      <NavBar />
      <div id='cont' className='container mx-auto '>
       
      
     
      <div className="flex justify-center items-center ">
        <div className='main-harvest' >
          <div className='harvest-contain'>

            <div  className="titleflex flex-col items-center">
                <h6 className="text-3xl front-blod" style={{color : 'olive', paddingBottom: 20}}>Harvest Details</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
                <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='Start Date' type='text' value={Dval}
                        onChange={(e)=>{setDval(e.target.value)}}/>
                    <input className='textbox' placeholder='End Date' type='text' value={Eval}
                        onChange={(e)=>{setEval(e.target.value)}}/>
                </div>      
                
                <input className='textbox' placeholder='Harvest Method' type='text' value={Mval}
                        onChange={(e)=>{setMval(e.target.value)}} />
                <input className='textbox' placeholder='Total Weight of Harvest' type='text' value={Tval}
                        onChange={(e)=>{setTval(e.target.value)}} />
                               
                <input className='textbox' placeholder='Harvest Storage Temperature' type='text' value={Sval}
                        onChange={(e)=>{setSval(e.target.value)}} />
                <br/>
                <button className="btn" type="submit">Save</button>
                </div>
              </form>
          </div>


        </div>
      </div>
      
      
    </div>
    </div>
    
    
    
    
  );
}

export default Harvest;
