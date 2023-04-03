import React, {useState} from 'react';
import {Toaster} from 'react-hot-toast'
import './Profile.css'

import Image from './Image';
import NavBar from '../../NavBar/NavBar';


function Settings() {

  const [Fval,setFval]= useState("");
  const [Lval,setLval]= useState("");
  const [emailval,setemailval]= useState("");
  const [IDval,setIDval]= useState("");
  const [Ageval,setAgeval]= useState("");
  const [adrval,setadrval]= useState("");
  const [phoneval,setphoneval]= useState("");

  const handlesubmit=(event)=>{
      event.preventDefault();
    }

  return (
    <div>
      <NavBar />
      <div className='container mx-auto'>
       
      <Toaster position='top-center' reverseOrder={false}></Toaster>
     
      <div className="flex justify-center items-center ">
        <div className='main-settings' >
          <div className='settings-contain'>

            <div className="titleflex flex-col items-center">
            <h6 className="text-3xl front-blod" style={{color : 'olive'}}>Account Details</h6>
            </div>

            <div className='profile flex justify-center py-3'>
               <Image />
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2">
                
                <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='First Name' type='text' value={Fval} 
                          onChange={(e)=>{setFval(e.target.value)}} id='First'/>
                    <input className='textbox' placeholder='Last Name' type='text' value={Lval} 
                          onChange={(e)=>{setLval(e.target.value)}} id='Last'/>
                </div>

                <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='ID card number' type='text' value={IDval} 
                          onChange={(e)=>{setIDval(e.target.value)}} id='ID'/>
                    <input className='textbox' placeholder='Age' type='text' value={Ageval} 
                          onChange={(e)=>{setAgeval(e.target.value)}} id='Age'/>
                </div>            
                
                <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='Adress' type='text' value={adrval}
                          onChange={(e)=>{setadrval(e.target.value)}} id='adr'/>
                    <input className='textbox' placeholder='Mobile N°' type='text' value={phoneval}
                          onChange={(e)=>{setphoneval(e.target.value)}} id='phone'/>
                </div>
                
                  <input className='textbox' placeholder='Email' type='email' value={emailval}
                        onChange={(e)=>{setemailval(e.target.value)}} id='mail'/>
                
                <button className="btn" type="submit">Update</button>
                </div>
              </form>
          </div>


        </div>
      </div>
      
      
    </div>
    </div>
    
    
    
    
  );
}

export default Settings;
