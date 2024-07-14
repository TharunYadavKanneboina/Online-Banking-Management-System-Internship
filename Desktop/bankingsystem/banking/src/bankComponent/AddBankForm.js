import axios from 'axios';
import React, { useEffect, useState } from 'react'


const AddBankForm=()=> {
    const[bank,setBank]=useState({
        name:"",
        code:"",
        address:"",
        contact:"",
        email:"",
        
        website:"",
        country:"",
        currency:"",
        userId:""


});
const[allBankUsers,setAllBankUsers]=useState([]);
const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
const retrieveAllManagers=async()=>{
    try{
        const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankManagers",{
        header:{Authorization:"Bearer"+admin_jwtToken}
        })
        console.log(response.data)
        return response.data
    }catch(error){
        console.error("Error Fetch Bankmanagers:",error);
        throw error;
    }
}

useEffect(()=>{
    const getAllBankUsers=async ()=>{
        const allBankUsers=await retrieveAllManagers();
        if(allBankUsers)
        {
            setAllBankUsers(allBankUsers.users)

        }
    }
    getAllBankUsers();
},[]);

const handleInput=(e)=>{
    setBank({...bank,[e.target.name]:e.target.value})

}
const saveBank=(e)=>{
    fetch("http://localhost:8080/api/bank/register",{
       method: "POST",
       headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + admin_jwtToken,
      },
      body: JSON.stringify(bank),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);
        })
    }
      )

    }
  return(
    <div>
    <div>
        <h5>ADD BANK FORM </h5>
    
</div>
<div>
    <form>
        <div>
            <label>
                Bank Name
            </label>
            <input type='text' onChange={handleInput} value={bank.name}/>
        </div>
        <div>
            <label>
               Code
            </label>
            <input type='text' onChange={handleInput} value={bank.code}/>
        </div>
        <div>
            <label>
                Address
            </label>
            <textarea cols={5} rows={10} onChange={handleInput} value={bank.address}/>
        </div>
        <div>
            <label>
               Contact
            </label>
            <input type='tel' onChange={handleInput} value={bank.contact}/>
        </div>
        <div>
            <label>
               Email
            </label>
            <input type='text' onChange={handleInput} value={bank.email}/>
        </div>
        <div>
            <label>
               WebSite
            </label>
            <input type='text' onChange={handleInput} value={bank.website}/>
        </div>
        <div>
            <label>
              Country
            </label>
            <input type='text' onChange={handleInput} value={bank.country}/>
        </div>
        <div>
            <label>
             Currency
            </label>
            <input type='text' onChange={handleInput} value={bank.currency}/>
        </div>
        <div>
            <label>
              UserId
            </label>
            <input type='text' onChange={handleInput} value={bank.userId}/>
        </div>
        <div>
           <button type='submit' onClick={saveBank} >Register Bank</button>
        </div>
    
        
    </form>
</div>
</div>


  )
}

export default AddBankForm;