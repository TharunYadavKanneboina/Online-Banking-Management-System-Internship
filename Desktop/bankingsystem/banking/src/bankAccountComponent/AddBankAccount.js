import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";


const AddBankAccount=()=> {
    const location=useLocation();
    const customer=location.this.state;
    const bank=JSON.parse(sessionStorage.getItem ("active_bank"));
    const [bankAccount,setBankAccount]=useState({
        accountNumber:"",
        ifscCode:"",
        type:"",
        bank_Id:bank.bank_Id,
        userId:customer.customer_Id
 })
 let navigate=useNavigate();
 const saveAccount = (e) => {
    fetch("http://localhost:8080/api/bank/account/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + bank_jwtToken,
      },
      body: JSON.stringify(bankAccount),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/customer/bank/account/detail", { state: customer });
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
    e.preventDefault();
  };
const bank_jwtToken=sessionStorage.getItem("bank_jwtToken");
 const handleInput=(e)=>{
 e.preventDefault();
 setBankAccount({...bankAccount,[e.target.name]:e.target.value})
 }

  return (
    <div>
    <div>
        <h5>Add BankAccount</h5>
    </div>
    <div>
        <form>
            <label><b>BankName</b></label>
            <input type='text' name='bankname' value={bank.BankName} readOnly/>
            <label><b>BankCode</b></label>
            <input type='text' name='bankcode' value={bank.BankCode} readOnly/>
            <label><b>Customer Name</b></label>
            <input type='text' name='customername' value={customer.name } readOnly/>
            <label><b>Customer Email</b></label>
            <input type='text' name='customeremail' value={customer.email} readOnly/>
            <label><b>Customer Contact</b></label>
            <input type='text' name='customercontact' value={customer.contact} readOnly/>
            <label><b>Account Number</b></label>
            <input type='number' name='number' value={bankAccount.accountNumber} onChange={handleInput}/>
            <label><b>IFSCCode</b></label>
            <input type='text' name='ifsccode' value={bankAccount.ifscCode} onChange={handleInput}/>
            <label><b>AccountType</b></label>
             <select type='select' name='type' value={bankAccount.type} onChange={handleInput}>
                <option value="">None</option>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
             </select>
             <div> <button type='submit' onClick={saveAccount}>AddAccount</button></div>
             <ToastContainer/>

            

        </form>

    </div>
    </div>
  )
  }

export default AddBankAccount;