import React, {useState} from 'react';
import Web3 from 'web3';
import truffleContract from 'truffle-contract';
import SupplyChain from '../../contracts/SupplyChain.json';
import { useLocation} from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';

function AddOil() {

  const [Pval,setPval]= useState("");
  const [Qval,setQval]= useState("");
  const [Mval,setMval]= useState("");
  const [Sval,setSval]= useState("");


  const location = useLocation();
  const { oliveid } = location.state;
 
  
  const handlesubmit = async (event) =>{
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
        
      await instance.oliveProducetItem(oliveid,{ from: owner });
      const data = {
    
        id: oliveid, 
        prod_date:Pval,
        quantity:Qval,
        prod_meth:Mval,
        spt:Sval,
      };
      fetch("http://localhost:5050/lands/produceOil", {
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
        console.log('Transaction completed!');
        window.location.replace("http://localhost:3000/manufacturer");
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
                <h6 className="text-3xl front-blod" style={{color : 'rgb(42, 128, 0)', paddingBottom: 20}}>Add Oil</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
                    
              <div className='name flex w-2/3 gap-5' style={{width : "100%"}}>
                    <label className="input-label" htmlFor="date-input">Production &nbsp;&nbsp;&nbsp; Date</label>
                    <input className='textbox' id='date-input' type='date' value={Pval}
                        onChange={(e)=>{setPval(e.target.value)}}/>
                    <label className="input-label" htmlFor="quantity-input">Quantity &nbsp;&nbsp;&nbsp; (L)</label>
                    <input className='textbox' id='quantity-input' type='text' value={Qval}
                        onChange={(e)=>{setQval(e.target.value)}} /> 
                </div>  
                <label className="input-label" htmlFor="method-input">Production Method</label>
                <input className='textbox' id='method-input' type='text' value={Mval}
                        onChange={(e)=>{setMval(e.target.value)}}/>
                <label className="input-label" htmlFor="temprature-input">Smoke Point Temprature</label>
                <input className='textbox' id='temprature-input' type='text' value={Sval}
                        onChange={(e)=>{setSval(e.target.value)}} />
                <br/>
                               
                
                <button className="btn" type="submit" >Add</button>
                </div>
              </form>
          </div>


        </div>
      </div>
      
      
    </div>
    </div>
    
    
    
    
  );
}

export default AddOil;
