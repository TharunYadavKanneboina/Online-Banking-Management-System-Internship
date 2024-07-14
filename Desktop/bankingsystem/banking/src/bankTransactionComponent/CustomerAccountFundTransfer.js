import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CustomerAccountFundTransfer=()=> {
    const customer=JSON.parse(sessionStorage.getItem("ACTIVATE_CUSTOMER"));
const[transfer,setTransfer]=useState({
    userId:customer.id,
    bankId:customer.bank.id,
    amount:"",
    toBankAccount:"",
    toBankIFSC:"",
    purpose:""
});
let navigate=useNavigate();
let customer_Token=sessionStorage.getItem("customer_jwtToken")
const handleInput=(e)=>{
    setTransfer({...transfer,[e.target.name]:e.target.value})
}
const saveAccount=(e)=>{
    fetch("http://localhost:8080/api/bankAccountTransaction/Transfer/Transaction",{
       method: "POST",
       headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + customer_Token,
      },
      body: JSON.stringify(transfer),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);
          if (res.success) {
            console.log("transfer done");
            setTimeout(() => {
                navigate("/customer/bank/account/statement", { state: customer });
              }, )
          }else{
            console.log("Didn't got success response");
        }
          
        })
        
    }
      ).catch((error) => {
        console.error(error);
        setTimeout(() => {
            window.location.reload(true);
          }, 1000); 
        
    })
    
      e.preventDefault();

}
  return (
    <div><div><h5>CustomerAccountFundTransfer</h5></div>
    <div>
        <form>
            <div>
            <label>Account Number</label>
            <input type='number' value={transfer.toBankAccount} onChange={handleInput}/></div>
            <div>
            <label>IFSC Code</label>
            <input type='text' value={transfer.toBankAccount} onChange={handleInput}/></div>
            <div>
            <label>Amount</label>
            <input type='number' value={transfer.amount} onChange={handleInput}/></div>
            <div>
            <label>Purpose</label>
            <textarea rows={3} value={transfer.purpose} onChange={handleInput} placeholder='......100 words'/></div>
            <div>
            <button type='text' onClick={saveAccount}>Transfer</button></div>
            
         
        </form>
  

    </div>
    </div>
  )
}

export default CustomerAccountFundTransfer;