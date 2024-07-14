import axios, { all } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


const ViewAllBanks=()=> {
    let navigate=useNavigate();
const[allBanks,setAllBanks]=useState([])

const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
const retrieveAllBanks=async ()=>{
    const response=await axios.get("http://localhost:8080/api/bank/fetch/allbanks?"+"allBanks"+allBanks,{
        headers:{
            Authorization: "Bearer " +admin_jwtToken,
        },
    });
    return response.data;
    
}
useEffect(()=>{
    const getAllBanks=async ()=>{
        const allBanks=await retrieveAllBanks();
        if(allBanks){
            setAllBanks(allBanks.banks)
        }
    };
    getAllBanks();
},[]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                <th scope='col'>BankName</th>
                        <th scope='col'>BankCode</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>WebSite</th>
                        <th scope='col'>Country</th>
                        <th scope='col'>corrency</th>

                       
                </tr>
            </thead>
            <tbody>
                {allBanks.map((bank)=>{
                        return
                        (
                    <tr>
                    <td>{bank.bankName}</td>
                    <td>{bank.code}</td>
                    <td>{bank.address}</td>
                    <td>{bank.contact}</td>
                    <td>{bank.email}</td>
                    <td>{bank.webSite}</td>
                    <td>{bank.country}</td>
                    <td>{bank.corrency}</td>
                    
                    

                </tr>
                        )

                    })}

            </tbody>
        </table>
    </div>
  )
}

export default ViewAllBanks;