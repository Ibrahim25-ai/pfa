import React, {useState} from 'react';
import './Harvest.css'
import NavBar from '../../NavBar/NavBar';
import Web3 from 'web3';
import truffleContract from 'truffle-contract';
import { useLocation } from 'react-router-dom';
import SupplyChain from '../../contracts/SupplyChain.json';



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
        
      await instance.oliveHarvestItem(oliveid,Dval,Eval,Mval,Sval,{ from: owner });
      
    const data = {
      id:owner,
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
                <h6 className="text-3xl front-blod" style={{color : 'rgb(42, 128, 0)', paddingBottom: 20}}>Harvest Details</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
              <div className='name flex w-2/3 gap-5' style={{ width: "100%" }}>
  <label className="input-label" htmlFor="start-input" style={{ marginTop: "5px" }}>Start Date</label>
  <input className='textbox' id='start-input' type='date' value={Dval} onChange={(e) => { setDval(e.target.value) }} />

  <label className="input-label" htmlFor="end-input" style={{ marginTop: "5px" }}>End Date</label>
  <input className='textbox' id='end-input' type='date' value={Eval} onChange={(e) => { setEval(e.target.value) }} />
</div>



    
                 <label className="input-label" htmlFor="method-input">Harvest Method</label>
                <input className='textbox' id='method-input' type='text' value={Mval}
                        onChange={(e)=>{setMval(e.target.value)}} />

                <label className="input-label" htmlFor="weight-input">Total Weight of Harvest</label>
                <input className='textbox' id='weight-input' type='text' value={Tval}
                        onChange={(e)=>{setTval(e.target.value)}} />

                <label className="input-label" htmlFor="temperature-input">Harvest Storage Temperature</label>              
                <input className='textbox' id='temperature-input' type='text' value={Sval}
                        onChange={(e)=>{setSval(e.target.value)}} />
                
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
