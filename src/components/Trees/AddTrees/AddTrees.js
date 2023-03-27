import React, {useState} from 'react';



function AddTrees() {

  const [Dval,setDval]= useState("");
  const [Vval,setVval]= useState("");
  const [Nval,setNval]= useState("");



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
                <h6 className="text-3xl front-blod" style={{color : 'olive', paddingBottom: 20}}>Add Trees</h6>
            </div>

            <form className="py-1" onSubmit={handlesubmit}>
              <div className="flex flex-col item-center gap-2 ">
                
                    
                
                <input className='textbox' placeholder='Number of Trees' type='text' value={Nval}
                        onChange={(e)=>{setNval(e.target.value)}}/>
                <input className='textbox' placeholder='Olive Variety' type='text' value={Vval}
                        onChange={(e)=>{setVval(e.target.value)}} />
                <input className='textbox' placeholder='Planting Date' type='text' value={Dval}
                        onChange={(e)=>{setDval(e.target.value)}}/>
                               
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

export default AddTrees;
