import React, { useState } from 'react';
import { storeCompany } from '../Services/api';

export default function Form() {
    const [details, setdetails] = useState(
        {
            companyName:'',
            address:'',
            city:'',
            state:'',   
            zip:''
        }
        
    );

    const changeHandler = (e) => {
         
        setdetails({...details, [e.target.name]: e.target.value});

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submit");
        await storeCompany(details);
        
    }
  return (
    <div >
         <form className='form'>
   
      <label htmlFor="inputEmail4">Company Name</label>
      <input type="text"  name="companyName" onChange={(e) => changeHandler(e)}/>
     
  
    <label htmlFor="inputAddress">Address</label>
    <input type="text" name='address' id="inputAddress" placeholder="1234 Main St" onChange={(e) => changeHandler(e)}/>
   
   
   
    
      <label htmlFor="inputCity">City</label>
      <input type="text"  name='city' id="inputCity" onChange={(e) => changeHandler(e)}/>
    
       
      <label htmlFor="inputState">State</label>
   
      <select id="inputState" name='state' className='rounded' onChange={(e) => changeHandler(e)}>
        <option>KPK</option>
        <option>Punjab</option>
      </select>
    
      <label htmlFor="inputZip">Zip</label>
      <input type="number" name='zip'  id="inputZip" onChange={(e) => changeHandler(e)}/>
    
   
   
  <button type="submit" className="btn btn-primary" onClick={(e) =>submitHandler(e)}>Submit</button>
</form>
      
    </div>
  )
}
