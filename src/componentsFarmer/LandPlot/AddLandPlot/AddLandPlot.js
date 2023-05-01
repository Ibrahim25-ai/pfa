import React, {useState} from 'react';

import Web3 from 'web3';
import truffleContract from 'truffle-contract';
import SupplyChain from '../../../contracts/SupplyChain.json';



function AddLandPlot() {

  const [Gval,setGval]= useState("");
  const [Tval,setTval]= useState("");
  const [Aval,setAval]= useState("");
  const [Nval,setNval]= useState("");
  const [landID, setLandID] = useState('');
  
  const handlesubmit = async (event) => {
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
      const result = await instance.addLand(Gval, Tval, Aval, Nval, owner, { from: owner });

      const data = {
        land_id : result.logs[0].args[0],
        geo_loc: Gval,
        sail_type: Tval,
        alt: Aval,
        num_trees: Nval,
        farmer_id: owner
      };
  
      fetch("http://localhost:5050/lands/addLand", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        window.location.reload();
        // do something with the response data
      })
      .catch(error => {
        console.error(error);
        // handle the error
      });
      
    
    } catch (error) {
      
    }

    
  };

  return (
    <div>
      <div id='cont' className='container mx-auto '>
       
      
     
      <div className="flex justify-center items-center ">
        <div className='main-harvest' >
          <div className='harvest-contain'>

            <div  className="titleflex flex-col items-center">
                <h6 className="text-3xl front-blod" style={{color : 'olive', paddingBottom: 20}}>Add Land Plot</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
                    
                
                <input className='textbox' placeholder='Geographic Location' type='text' value={Gval}
                        onChange={(e)=>{setGval(e.target.value)}}/>
                <input className='textbox' placeholder='Soil Type' type='text' value={Tval}
                        onChange={(e)=>{setTval(e.target.value)}} />
                               
                <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='Altitude' type='text' value={Aval}
                        onChange={(e)=>{setAval(e.target.value)}}/>
                    <input className='textbox' placeholder='Number of Trees' type='text' value={Nval}
                        onChange={(e)=>{setNval(e.target.value)}} /> 
                </div>  
                <br/>
                <button className="btn" type="submit">Add</button>
                </div>
              </form>
          </div>


        </div>
      </div>
      
      
    </div>
    </div>
    
    
    
    
  );
}

export default AddLandPlot;
/* 
const data = {
            landID: decoded._LandID.toString(),
            geo_loc: Gval,
            sail_type: Tval,
            alt: Aval,
            num_trees: Nval,
            farmer_id: owner
          };
      
          fetch("http://localhost:5050/lands/addLand", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // do something with the response data
          })
          .catch(error => {
            console.error(error);
            // handle the error
          });
*/