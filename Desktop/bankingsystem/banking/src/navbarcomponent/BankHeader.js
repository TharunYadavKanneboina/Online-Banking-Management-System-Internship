import React from 'react'
import {Link, useNavigate } from 'react-router-dom';


const BankHeader=()=> {
    let navigate=useNavigate;
    const bankLogout = () => {sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  return (
    <div>
      <center>
        <li className='nav-time'><link to="user/bank/Register Customer" className='navLinkactive' 
                aria-currentpage="page"><b className='text-color'>Register customer</b></link></li>

                <li className='nav-time'><link to="admin/bankRegister Customer" className='navlinkactive' 
                aria-currentpage="page"><b className='text-color'>Bank Accounts</b></link></li>
 
              <li className='nav-time'><link to="admin/bank/Register Customer" className='navlinkactive' 
                aria-currentpage="page"><b className='test-color'>Bank Customers</b></link></li>

                <li className='nav-time'><link to="admin/bank/Register Customer" className='navlinkactive' 
                aria-currentpage="page"><b className='test-color'>Customer Transactions</b></link></li>

                <li className='nav-time'><link to=" " className='navlinkactive'
                 aria-currentpage="page" onClick={bankLogout}><b className='test-color'>Logout</b></link> </li>
      </center>
    </div>
  )
}

export default BankHeader