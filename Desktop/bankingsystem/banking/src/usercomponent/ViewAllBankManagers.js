import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

const ViewAllBankManagers =()=> {
    let navigate=useNavigate();
    const[allManagers,setAllManagers]=useState([]);
    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
    const retrieveAllBankManagers=async ()=>{
        const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankManagers?"+"allManagers"+allManagers,{
            header:{Authorization:"Bearer"+admin_jwtToken}
        })
        console.log(response.data)
        return response.data

    }
    useEffect(()=>{
        const getAllBanks=async ()=>{
            const managers=await retrieveAllBankManagers();
            if(managers)
            {
                setAllManagers(managers.users)

            }
        }
        getAllBanks();
    },[])


    
  

  return (
    <div>
        <div>
        <h2>Enter All Bank Managers</h2>
        </div>
         <div>
            <table >
                <thead >
                    <tr >
                        <th scope='col'>ManagerName</th>
                        <th scope='col'>BankName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Street</th>
                        <th scope='col'>City</th>
                        <th scope='col'>Pincode</th>
                       
                    </tr>

                    
                </thead>
                <tbody>
                  {  allManagers.map((manager)=>{
                        return
                        (
                    <tr>
                    <td>{manager.bank.managerName}</td>
                    <td>{manager.bank.bankName}</td>
                    <td>{manager.user.email}</td>
                    <td>{manager.user.gender}</td>
                    <td>{manager.user.contact}</td>
                    <td>{manager.user.street}</td>
                    <td>{manager.user.city}</td>
                    <td>{manager.user.pincode}</td>
                    
                    

                </tr>
                        )

                    })}
                    
                </tbody>
            </table>
         
         </div>
  

        
    </div>
  )
  
  }

export default ViewAllBankManagers