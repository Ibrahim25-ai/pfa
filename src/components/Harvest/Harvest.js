import React, {useState} from 'react';
import {Toaster} from 'react-hot-toast'
import './Harvest.css'
import NavBar from '../NavBar/NavBar';


function Harvest() {

  const [Dval,setDval]= useState("");
  const [Nval,setNval]= useState("");
  const [Tval,setTval]= useState("");
  const [Mval,setMval]= useState("");
  const [Sval,setSval]= useState("");



  const handlesubmit=(event)=>{
      event.preventDefault();
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
                    <input className='textbox' placeholder='Harvest Date' type='text' value={Dval}
                        onChange={(e)=>{setDval(e.target.value)}}/>
                    <input className='textbox' placeholder='Harvest Method' type='text' value={Mval}
                        onChange={(e)=>{setMval(e.target.value)}} /> 
                </div>      
                
                <input className='textbox' placeholder='Number of Harvested Trees' type='text' value={Nval}
                        onChange={(e)=>{setNval(e.target.value)}}/>
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
