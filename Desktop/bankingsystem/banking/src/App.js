import logo from './logo.svg';
import './App.css';





import { Route, Routes } from 'react-router-dom';


import NormalHeader from './navbarcomponent/NormalHeader';

import ViewAllBankCustomers from './usercomponent/ViewAllBankCustomers';
import ViewAllBankManagers from './usercomponent/ViewAllBankManagers';

import HomePage from './pageComponent/HomePage';

import ViewAllBanks from './bankComponent/ViewAllBanks';
import { About } from './pageComponent/About';
import AdminRegistraction from './usercomponent/AdminRegistration';
import UserLogin from './usercomponent/UserLogin';
import UserRegisterFields from './usercomponent/UserRegisterFields';
import AddBankForm from './bankComponent/AddBankForm';
import CustomerAccountFundTransfer from './bankTransactionComponent/CustomerAccountFundTransfer';
import ViewCustomerTransaction from './bankTransactionComponent/ViewCustomerTransaction';
import AddBankAccount from './bankAccountComponent/AddBankAccount';
import ViewBankAccountStatement from './bankAccountComponent/ViewBankAccountStatement';
import { Contact } from './pageComponent/Contact';
import { OnlineBankingSystem } from './pageComponent/OnlineBankingSystem';
import Header from './navbarcomponent/Header';



function App() {
  return(
    
     <>
   
   <Header/>
      
      <Routes>
      {/* PageComponent */}
      <Route path='/' element={<OnlineBankingSystem/>}/>   
      <Route path='/onlinebankingsystem' element={<OnlineBankingSystem/>}/>   
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/home' element={<HomePage/>}/> 
      <Route path='/about' element={<About/>}/>

      <Route path='/user/admin/register' element={<AdminRegistraction/>}/>
      <Route path='/user/login' element={<UserLogin/>}/>
      <Route path='/user/customer/register' element={<UserRegisterFields/>}/>
      <Route path='/user/Bank/register' element={<UserRegisterFields/>}/>
      

      <Route path='/ViewAllBankCustomer' element={<ViewAllBankCustomers/>}/>
      <Route path='/ViewAllBankMangers' element={<ViewAllBankManagers/>}/>

       {/* BankComponent */}
      <Route path='admin/bank/register' element={<AddBankForm/>}/>
      <Route path='/admin/bank/all' element={<ViewAllBanks/>}/>

      {/* Transaction component */}
      <Route path='/customer/bank/transfer' element={<CustomerAccountFundTransfer/>}/>
      <Route path='/viewcustomer/bank/transfer' element={<ViewCustomerTransaction/>}/>

      {/* Bank Account Statement */}
      <Route path='/bank/customer/Statement' element={<AddBankAccount/>}/>
      <Route path='/viewbank/customer/register' element={<ViewBankAccountStatement/>}/>
    </Routes>
        
        </>   
         
  )
}

export default App;