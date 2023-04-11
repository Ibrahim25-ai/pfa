import React, {useState} from 'react';

function AddOil() {

  const [Pval,setPval]= useState("");
  const [Qval,setQval]= useState("");
  const [Mval,setMval]= useState("");
  const [Sval,setSval]= useState("");
 
  
  const handlesubmit=(event)=>{
    event.preventDefault();
  }

  return (
    <div>
      <div id='cont' className='container mx-auto '>
       
      
     
      <div className="flex justify-center items-center ">
        <div className='main-harvest' >
          <div className='harvest-contain'>

            <div  className="titleflex flex-col items-center">
                <h6 className="text-3xl front-blod" style={{color : 'olive', paddingBottom: 20}}>Add Oil</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
                    
              <div className='name flex w-2/3 gap-20' style={{width : "100%"}}>
                    <input className='textbox' placeholder='Production Date' type='text' value={Pval}
                        onChange={(e)=>{setPval(e.target.value)}}/>
                    <input className='textbox' placeholder='Quantity (L)' type='text' value={Qval}
                        onChange={(e)=>{setQval(e.target.value)}} /> 
                </div>  
                <input className='textbox' placeholder='Production Method' type='text' value={Mval}
                        onChange={(e)=>{setMval(e.target.value)}}/>
                <input className='textbox' placeholder='Smoke Point Temprature' type='text' value={Sval}
                        onChange={(e)=>{setSval(e.target.value)}} />
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

export default AddOil;
