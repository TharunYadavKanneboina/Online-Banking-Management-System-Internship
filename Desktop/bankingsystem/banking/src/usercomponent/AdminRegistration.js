import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const AdminRegistraction = () => {
  let navigate = useNavigate();

  const [registerRequest, setRegisterRequest] = useState({
    email:"",
    password:""
  });

  const handleUserInput = (e) => {
    setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
  };
  const [errors,setErrors]=useState({});



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
    const validationErrors={}
    if(!registerRequest.email.trim())
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
    
setErrors(validationErrors)

if(Object.keys(validationErrors).length === 0) {
    alert("Form Submitted successfully")
}

  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title " style={{background:"lightblue"}}>Admin Register</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label for="emailId" class="form-label">
                  <b>Email Id</b>
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
              <button
                type="submit"
                className="btn bg-primary custom-bg-text"
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

export default AdminRegistraction;