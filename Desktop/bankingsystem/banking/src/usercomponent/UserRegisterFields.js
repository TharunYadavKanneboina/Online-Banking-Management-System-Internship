import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';




const UserRegisterFields = () => {
  let navigate = useNavigate();

  const [registerRequest, setRegisterRequest] = useState({
    name:"",
    
    email: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    roles: "",
    age: "25",
    Date:"",
    gender:"",
    bankId:"",
  });
  
 
  const handleUserInput = (e) => {
    setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
  };
  const [errors, setErrors]=useState({})

  

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerRequest),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.href = "/user/login";
            }, 1000); // Redirect after 3 seconds
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.preventDefault();
    const validationErrors = {}
    if(!registerRequest.name.trim()) {
        validationErrors.name = "username is required"
    }

    if(!registerRequest.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(registerRequest.email)){
        validationErrors.email = "email is not valid"
    }

    if(!registerRequest.password.trim()) {
        validationErrors.password = "password is required"
    } else if(registerRequest.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }
    if(!registerRequest.contact.trim()){
      validationErrors.contact="contact is required"

    }
    else if(registerRequest.contact.length < 10)
    {
      validationErrors.contact= "contact should be at least 10 char"
    }
    
    if(!registerRequest.contact.trim()){
      validationErrors.contact="contact is required"

    }
    else if(registerRequest.contact.length < 10)
    {
      validationErrors.contact= "contact should be at least 10 char"
    }
    if(!registerRequest.roles.trim()) {
      validationErrors.roles = "roles is required"
  } 
  if(!registerRequest.gender.trim()) {
    validationErrors.gender = "gender is required"
} 
if(!registerRequest.bankId.trim()) {
  validationErrors.bankId = "bankId is required"
} 
    

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }


  return (
  <div>
      
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title " style={{background:"red"}}>Admin Register</h4>
          </div>
          <div className="card-body">
            <form >
              <div className="mb-3 text-color">
                <label for="name" class="form-label">

                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={registerRequest.name}
                />
                 {errors.name && <span>{errors.name}</span>}  
              </div>
              <div className="mb-3 text-color">
                <label for="email" class="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleUserInput}
                  value={registerRequest.email}
                />
                 {errors.email && <span>{errors.email}</span>}  
              </div>
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={registerRequest.password}
                  autoComplete="on"
                  
                />
                 {errors.password && <span>{errors.password}</span>}  
              </div>
              <div className="mb-3 text-color">
                <label for="contact" class="form-label">
                  <b>contact</b>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  maxLength={10}
                  name="contact"
                  pattern="newErrors.contact"
                  onChange={handleUserInput}
                  value={registerRequest.contact}
                />
                 {errors.contact && <span>{errors.contact}</span>}  
              </div>
              <div className="mb-3 text-color">
                <label for="streetholder" class="form-label">
                  <b>street</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                  onChange={handleUserInput}
                  value={registerRequest.street}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="city" class="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={registerRequest.city}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="pincode" class="form-label">
                  <b>pincode</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  maxLength={6}
                  name="pincode"
                  pattern="newErrors.pincode"
                  onChange={handleUserInput}
                  value={registerRequest.pincode}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="roles" class="form-label">
                  <b>Roles</b>
                </label>
                <select name="roles">
                    <option value="">none</option>
                    <option value="bank">Bank</option>
                    <option value="customer">Customer</option>

                </select>
                {errors.roles && <span>{errors.roles}</span>}  
              </div>
              <div className="mb-3 text-color">
                <label for="dob" class="form-label">
                  <b>Date of Birth</b>
                </label>
                <input
                  type="date"
                 
                  id="dod"
                  name="Date"
                  onChange={handleUserInput}
                  value={registerRequest.Date}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="age" class="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  min={18}
                  max={100}
                  name="age"
                  pattern="newErrors.age"
                  onChange={handleUserInput}
                  value={registerRequest.age}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="gender" class="form-label">
                  <b>Gender</b>
                </label>
                <select name="gender">
                    <option value="">none</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                    <option value="other">Other</option>


                </select>
                
                {errors.gender && <span>{errors.gender}</span>}  

              </div>
              <div className="mb-3 text-color">
                <label for="bankid" class="form-label">
                  <b>BankId</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bankid"
                  name="bankid"
                  onChange={handleUserInput}
                  value={registerRequest.bankId}
                />
                 {errors.bankId && <span>{errors.bankId}</span>}  
                
              </div>

              <button
                type="submit"
                className="btn bg-color custom-bg-text" 
                style={{backgroundColor:"#008080"}}
                onClick={loginAction}
              >
                Register
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default UserRegisterFields;