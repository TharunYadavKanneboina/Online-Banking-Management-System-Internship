import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ViewAllBankCustomers =()=> {
    let navigate=useNavigate();
    const[allCustomer,setAllCustomer]=useState([]);
    const[customerName,setCustomerName]=useState("");
    const[temporaryCustomerName,setTemporaryCustomerName]=useState("");
    const[updateUserStatusRequest,setUpdateUserStatusRequest]=useState({userid:"",status:""});
    const admin_jwtToken=sessionStorage.getItem("admin_jwtToken");
    const retrieveBankAllCustomerByName= async()=>{
        const response=await axios.get("http://localhost:8080/api/user/fetch/AllBankUsersrole:Customer"+"customerName"+customerName,{
            header:{Authorization:"Bearer"+admin_jwtToken}
        })
        console.log(response.data)
        return response.data

    }
    useEffect(()=>{
        if(customerName!==""){
        const getAllCustomerByName=async()=>{
    const customer=await retrieveBankAllCustomerByName();
     if(customer){
        setAllCustomer(customer.users);
    }


     }
    getAllCustomerByName();
}
else{
    const getAllCustomer=async()=>{
        const customer= await retrieveAllCustomer();
        if(customer){
        setAllCustomer(customer.users); 

    }

}
getAllCustomer();
}


    },[])
    const retrieveAllCustomer= async()=>{
        const response=await axios.get("http://localhost:8080/api/user/search/customers/search"+"customerName"+customerName,{
            header:{Authorization:"Bearer"+admin_jwtToken}
        })
        console.log(response.data)
        return response.data

    }
 
      const SearchByCustomerName=(e)=>{
        e.preventDefault();
      setCustomerName(temporaryCustomerName)};
      const viewAccountDetails=(customer)=>{
        customer.preventDefault();
        navigate("customer/bank/Account/details",{state:customer})
      }
      
      

  return (
    <div>
        <div>
        <h2 >Enter All Bank customers</h2>
        </div>
        <div>
            <form>
        <label><b>CustomerName</b></label>
        <input type="text" name='customerName' placeholder='Enter CustomerName' value={temporaryCustomerName} onChange={(e)=>setTemporaryCustomerName(e.target.value)}
         /><div>
         <button type="submit"  onClick={SearchByCustomerName}>Submit</button></div>
         </form>
         </div>
         <div>
            <table  className='table table-bordered '>
                <thead >
                    <tr>
                        <th scope='col'>BankName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Street</th>
                        <th scope='col'>City</th>
                        <th scope='col'>Pincode</th>
                        <th scope='col'>AccountDetails</th>
                        <th scope='col'>Status</th>
                    </tr>

                    
                </thead>
                <tbody>
                  {  allCustomer.map((customer)=>{
                        return
                        (
                    <tr>
                    <td>{customer.user.BankName}</td>
                    <td>{customer.user.Email}</td>
                    <td>{customer.user.Gender}</td>
                    <td>{customer.user.Contact}</td>
                    <td>{customer.user.Street}</td>
                    <td>{customer.user.City}</td>
                    <td>{customer.user.Pincode}</td>
                    <td>{(()=>{if(customer.isAccountLinked==="Yes")
                    {
                        return ( <button type='submit' onClick={()=>viewAccountDetails(customer)}>ViewAccount</button>)
                    }})()}
                    {(()=>{if(customer.isAccountLinked!=="Yes")
                    {
                        return ( <b>Account Not Linked</b>)
                    }})()}
                    </td>
                    <td>{customer.user.Status}</td>
                    

                </tr>
                        )

                    })}
                    
                </tbody>
            </table>
         
         </div>
  

        
    </div>
  )
  
  }

export default ViewAllBankCustomers;