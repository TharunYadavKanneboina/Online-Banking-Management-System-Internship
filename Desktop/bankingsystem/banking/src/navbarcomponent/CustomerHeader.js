import React from 'react'
import { useNavigate } from 'react-router-dom';

const CustomerHeader=()=> {
    const customer=JSON.parse(sessionStorage.getItem("ACTIVE_CUSTOMER"))

    let navigate=useNavigate;
    const customerLogout = () => {sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer jwt_Token");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };
const moneyTransfer=()=>{
    navigate("/customer/bank/account/statement",{
        state:customer
    })

}

const ViewbankAccount=()=>{
    
    if(customer.isaccountlinked==="yes"){
        navigate("/customer/bank/account/details",{
        state:customer
    })
}else{console.eror("Bank Not Linked")
}}

const handletransactionHistory=()=>{
    navigate("/customer/bank/account/statement",{
        state:customer
    })

}



  return (
    <ul>
      <li className='nav-time'><div onClick={moneyTransfer}>Money Transfer</div></li>
      <li className='nav-time'><div onClick={ViewbankAccount}>Bank Account</div></li>
      <li className='nav-time'><div onClick={handletransactionHistory}>Transaction History</div></li>
      <li className='nav-time'><link to=" " className='navlinkactive'
      aria-currentpage="page" onClick={customerLogout}><b className='test-color'>Logout</b></link> </li>
      </ul>
  )
}

export default CustomerHeader;