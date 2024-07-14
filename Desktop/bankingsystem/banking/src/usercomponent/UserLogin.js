import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const  UserLogin= () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
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
  };

  return (
    <center>
        {/* <table class="table table-bordered"> */}
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title" style={{backgroundColor:"#008080"}}> User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
               {/* <tr> */}
               {/* <td> */}
                 <label for="User Role" class="form-label" style={{color:"red"}}>
                <b>User Role</b>
                </label> <br/>
                {/* </td> */}
               {/* <td>  */}
                <select>
                    <option value="">select role</option>
                    <option value="Manager">Manager</option>
                    <option value="Account Manager">Account Manager</option>
                    <option value="Clerk">Clerk</option>
                </select >
                 {/* </td> */}
                {/* </tr> */}
                 </div>
                 <div className="mb-3 text-color">
                {/* <tr> */}
               {/* <td> */}
                 <label for="emailId" class="form-label" style={{color:"red"}}>
                  <b>Email Id</b>
                </label>
                {/* </td> */}
               {/* <td>  */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleUserInput}
                  value={loginRequest.email}
                /> 
                {/* </td> */}
                {/* </tr> */}
              </div>
              <div className="mb-3 text-color">
                {/* <tr> */}
               {/* <td>  */}
                <label for="password" className="form-label" style={{color:"red"}}>
                  <b>Password</b>
                </label> 
                {/* </td> */}
               {/* <td> */}
                 <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
                 {/* </td> */}
                {/* </tr> */}
              </div>
              {/* <tr> */}
              {/* <td> */}
              {/* bsStyle="default" style= { {color:"blue"}} */}
                <button
                type="submit"  style={{backgroundColor:"#008080"}}
                className="btn bg-color custom-bg-text" 
                onClick={loginAction}
              >
                Login
              </button> 
              {/* </td> */}
              {/* </tr> */}
              <ToastContainer /> 
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* </table> */}
    </center>
  );
};
export default UserLogin;