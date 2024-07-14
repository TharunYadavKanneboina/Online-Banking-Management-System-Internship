import React from 'react'
import AdminHeader from './AdminHeader'
import BankHeader from './BankHeader'
import CustomerHeader from './CustomerHeader'
import NormalHeader from './NormalHeader'

const RoleNav=()=> {
    const customer=JSON.parse(sessionStorage.getItem("ACTIIVE_CUSTOMER"))
    const bank=JSON.parse(sessionStorage.getItem("ACTIIVE_Bank"))
    const admin=JSON.parse(sessionStorage.getItem("ACTIIVE_ADMIN"))
    if(admin!=null){
        return <AdminHeader/>

    }
    else if(bank!=null){
        return <BankHeader/>

    }
    else if(customer!=null){
        return <CustomerHeader/>

    }
    else{
        return <NormalHeader/>
    }

  return (
    <div>
        
    </div>
  )
}

export default RoleNav