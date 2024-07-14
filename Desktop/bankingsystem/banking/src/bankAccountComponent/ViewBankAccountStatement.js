import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const  ViewBankAccountStatement=()=> {
    const[statementDownloaderRequest,setStatementDownloaderRequest]=useState({
        startDate:"",
        endDate:"",
        accountId:""
}
        );
        const location=useLocation();
        let jwtToken;
        const customer=location.state
        const admin_JwtToken=sessionStorage.getItem("admin_JwtToken");
        const[bankAccount,setBankAccount]=useState([]);
        const handleUserInput=(e)=>{
            setStatementDownloaderRequest({...statementDownloaderRequest,[e.target.name]:e.target.value})
        };
        const downloadStatement=(e)=>
        {
            e.preventDefault();
            fetch("http://localhost:8080/api/bankAccountTransaction/download/Statement?account_Id="
            +bankAccount.Id+"startDate"+convertToEpoachTime(statementDownloaderRequest.startDate)+
            "endDate"+convertToEpoachTime(statementDownloaderRequest.endDateDate),
            {
                method: "GET",
                headers: {
                 
                  Authorization: "Bearer " + jwtToken,
                }
            }
        ).then((response)=>response.blob())
        .then((blob)=>{const url=window=URL.createObjectURL(blob);
            
        
        // Create a temporary <a> element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "bank_statement.pdf"; // Specify the desired filename here

        // Append the link to the document and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up the temporary URL and link
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Download error:", error);
      });
  };
            const retrieveBankAccount=async()=>{
                const response=await axios.get("http://localhost:8080/api/bankaccountcontroller/fetch/User?userId="+customer.id,
                {
                    headers:
                    {
                        Authorization:"Bearer"+admin_JwtToken
                      }
                   })
                   return response.data
          }
        
            const convertToEpoachTime=(dateString)=>{
            const selectedDate=new Date(dateString);
            const epoachTime=selectedDate.getTime;
            return epoachTime;

        }
        const formatDateFromEpoch = (epochTime) => {
            const date = new Date(Number(epochTime));
            const formattedDate = date.toLocaleString(); // Adjust the format as needed
        
            return formattedDate;
          };

  return (
    <div>
        <form>
            <div>
           <label>StartDate</label>
           <input type='datetime_local'  value={statementDownloaderRequest.startDate}
            onChange={handleUserInput} required/>
           </div>

           <div>
            <label>EndDate</label>
            <input type='datetime_local'  value={statementDownloaderRequest.endDate} 
            onChange={handleUserInput} required/>
           </div>

           <div>
           <label>Account_Id</label>
            <input type='number'  value={statementDownloaderRequest.account_Id} 
            onChange={handleUserInput} required/>
           </div>

           <div>
            <button type='submit' onClick={downloadStatement}>DOWNLOAD STATEMENT</button>
            <div>
                <h3>Customer Bank Details</h3>
            </div>
            <div>
            <label htmlFor="name" className="form-label">
                    <b>Bank</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={customer.bank.name}
                    readOnly/>
            </div>
            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Bank Account No</b>
                </lable>
                <input type='text' className='form-control' value={customer.bank.bankAccountno}readOnly/>
            </div>
            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Ifsc code</b>
                </lable>
                <input type='text' className='form-control' value={customer.bank.Ifsccode}readOnly/>
            </div>

            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Customer Name</b>
                </lable>
                <input type='text' className='form-control' value={customer.bank.name}readOnly/>
            </div>
                 
            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Customer Contact</b>
                </lable>
                <input type='text' className='form-control' value={customer.bank.contact}readOnly/>
            </div>
            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Creation Date</b>
                </lable>
                <input type='text' className='form-control' value={formatDateFromEpoch(bankAccount.creationDate)}readOnly/>
            </div>
            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>Available balance</b>
                </lable>
                <input type='text' className='form-control' value={bankAccount.name}readOnly/>
            </div>

            <div>
                <lable htmlFor="name" className="form-lable">
                    <b>AccountStatus</b>
                </lable>
                <input type='text' className='form-control' value={bankAccount.status}readOnly/>
            </div>
           </div>
        </form>

    </div>
  )
}

export default ViewBankAccountStatement;