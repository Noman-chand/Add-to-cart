import React, { useState } from 'react'

function Practice() {
    const[inputData,setInputData] = useState(" ");
    const [items,setItems] = useState([]);

function handleInput(){
if(!inputData){
    
}else{

setItems([...items,inputData]);
setInputData('')

}
}
function deleteFun(id){
    const updateData = items.filter( (value,index)=>{
        return id !== index;
    })
    setItems(updateData);

}
    

       
  return (
   <>
<h3>Put Data In field</h3>
<input type='text'placeholder='enter name' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
<button onClick={handleInput}>Add</button>  
{items.map( (value,index)=>{
    return (
<>
<li key={index}>{value} <button onClick={()=> deleteFun(index)}>Delete</button></li>        
</>
)
})} 
   </>
   
   
  )
}

export default Practice
