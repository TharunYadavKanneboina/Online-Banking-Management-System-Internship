import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomerAccountFundTransfer from './CustomerAccountFundTransfer';

const ViewCustomerTransaction=()=> {
    const[allTransactions,setallTransactions]=useState({})

    
    const bankAccount=JSON.pharse(sessionStorage.getItem("active BankAccount"))
    const Bank=JSON.pharse(sessionStorage.getItem("active Bank"))
    const bankAccountTransaction=JSON.pharse(sessionStorage.getItem("active Bank Account Transaction"))
    const user=JSON.pharse(sessionStorage.getItem("active User"))
    const formatDateFromeEpoch=(epochTime)=>{
        const date=new Date (Number(epochTime));
        const formatToDate=date.tolocalString();
        return formatToDate;
    }

    let jwt_Token;
    let admin_JwtToken=sessionStorage.getItem("admin_jwtToken");
    let bank_JwtToken=sessionStorage.getItem("bank_jwtToken");
    let customer_JwtToken=sessionStorage.getItem("customer_jwtToken");

    if(admin_JwtToken){
        jwt_Token=admin_JwtToken;
    }else if(bank_JwtToken){
        jwt_Token=bank_JwtToken;
    }
    else
    {
        jwt_Token=customer_JwtToken;
    }

    const retrieveAllTransaction=async()=>{
        const response=await axios.get("http://localhost:8080/bankaccounttransaction/fetch/api/bank/user Transaction History?userId="+CustomerAccountFundTransfer.id,
        {headers:{Authorization: "Bearer " +jwt_Token}})
        console.log(response.data)

        return response.data
    }
    useEffect(()=>{
        const getAllTransaction=async()=>{
            const transactions=await retrieveAllTransaction();
            if(transactions)
            {
                setallTransactions(transactions.bankTransaction)
            }
        };getAllTransaction()
    },[])
  return (
    <div>
        <div>
      <h2>View Customer Transaction</h2>
      <table>
            <thead>
            <tr>
           <th scope='col'>Transaction Id</th>
           <th scope='col'>Source Bank</th>
           <th scope='col'>Customer Name</th>
           <th scope='col'>Source Account</th>
           <th scope='col'>Transaction Type</th>
           <th scope='col'>Amount</th>
           <th scope='col'>Narration</th>
           <th scope='col'>Transaction Time</th>
           </tr>
            </thead>
            <tbody>
                {ViewCustomerTransaction.map((Transaction)=>{
                    return(
                        <tr>
                            <td><b>{Transaction.bankTransaction.transactionId}</b></td>
                            <td><b>{Transaction.bank.name}</b></td>
                            <td><b>{Transaction.user.name}</b></td>
                            <td><b>{Transaction.bankAccount.number}</b></td>
                            <td><b>{Transaction}</b></td>
                            <td><b>{Transaction.bankAccountTransaction.Amount}</b></td>
                            <td><b>{Transaction.bankAccountTransaction.Narration}</b></td>
                            <td> <b>{formatDateFromeEpoch(Transaction.bankAccountTransaction.TransactionTime)}</b></td>
                        </tr>
                    )
                })}
            </tbody>
            </table>

      </div>
    </div>
  )
}

export default ViewCustomerTransaction;