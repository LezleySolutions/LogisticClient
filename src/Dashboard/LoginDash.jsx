import React, { useState } from "react";
import "./Assets/LoginDash.css"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginDash = () => {
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate()
  const info = {
    Mail: "DiceDispatch@gmail.com",
    Pass: "Dice@1122",
  };
  const Login = () => {
      setError("")
     if(Email != info.Mail && Password !== info.Pass){
          setError('Please Enter Valid email and Password')
      }else if(Email != info.Mail){
        setError('Please Enter Valid Email')
    }else if(Password !== info.Pass){
        setError('Please Enter Valid Password')
    }
    else{
        localStorage.setItem("Email", Email);
        localStorage.setItem("Password", Password);
        navigate("/dashboard")
    }
  };
  return (
    <div className="Main" style={{backgroundImage:"url(img/aboutTrucks.jpg)",objectFit:"cover",backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
      <section className="log-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-3">
              <h2 className="heading-section">Welcome to Dice Freight</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-5 text-center">Login</h3>
                <div className="signin-form">
                {Error.length>0?
                  <div className="text-danger text-center" style={{fontSize:"12px"}}> {Error}</div>:null
                  }
                  <div className="form-group">
                    <input
                     type="email"
                        className="login-form-control"
                        placeholder="Email"
                        id="username"
                        onChange={(e) => setEmail(e.target.value)}
                        onClick={() => setError("")}
                        value={Email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                        type="password"
                        className="login-form-control"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        onClick={() => setError("")}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                      onClick={() => Login()}
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                <div className="social d-flex text-center">
                  <p className="px-2 py-2 mr-md-1 rounded">
                    <span className="mr-2"><FaGoogle size={20} color="#1089ff " /> </span> Google
                  </p>
                  <p className="px-2 py-2 ml-md-1 rounded">
                    <span className="mr-2"><FaFacebook size={20} color="#1089ff " /> </span> Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginDash;
