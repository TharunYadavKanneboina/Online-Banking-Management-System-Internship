import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 


const AdminHeader=()=>{

    let navigate=useNavigate;
    const adminLogout = () => {sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };


  return (
    
            <ul>
                <li className="nav-item">
                    <Link to="/user/bank/register" className="nav-link active" aria-current="page"><b className="text-color">RegisterBankManager</b> </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/add" className="nav-link active" aria-current="page"><b className="text-color">AddBank</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/view" className="nav-link active" aria-current="page"><b className="text-color">ViewBank</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/bankManagers" className="nav-link active" aria-current="page"><b className="text-color">BankManagers</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/allCustomers" className="nav-link active" aria-current="page"><b className="text-color">AllCustomers</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/allBankAccounts" className="nav-link active" aria-current="page"><b className="text-color">AllBankAccounts</b></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/bank/AllBankTransactions" className="nav-link active" aria-current="page"><b className="text-color">AllBankTransactions</b></Link>
                </li>

                <li className="nav-item">
                    <Link to="" className="nav-link active" aria-current="page" onClick={adminLogout}><b className="text-color">Logout</b></Link>
                </li>
            </ul>
       
  )
}

export default AdminHeader