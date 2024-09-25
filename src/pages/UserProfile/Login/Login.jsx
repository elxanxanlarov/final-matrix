import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.scss";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const adminData = {
  adminEmail: "admin@gmail.com",
  adminPassword: "admin1234",
};

const Login = () => {
  const [loginClose, setLoginClose] = useState(false);
  const [showPassowrd,setShowPassowrd]=useState(true)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const closeLoginFunc = (e) => {
    setLoginClose(true);
    e.preventDefault();
    setTimeout(() => {
      navigate("/register");
    }, 1200);
  };

  const onSubmit = (data) => {
    const savedUserData = localStorage.getItem("userData");
    const userData = JSON.parse(savedUserData);

    const user = userData.find(
      (user) => user.email === data.email && user.password === data.password
    );
    const isAdmin =
      data.email === adminData.adminEmail &&
      data.password === adminData.adminPassword;

    if (user || isAdmin) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email: data.email, isAdmin,name:"salam" })
      );

      if (isAdmin) {
        console.log("Navigating to admin page");
        navigate("/dashboard");
      } else {
        swal("You have successfully logged in!", "", "success");
        navigate("/");
      }
    } else {
      console.log("nor");
    }
  };

  return (
    <div className="login">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12"></div>
        <div className="col-md-6 col-sm-12 col-12 my-5">
          <div className="form-con">
            <form onSubmit={handleSubmit(onSubmit)} className="active">
              <h1 className={`mb-3 fw-normal ${loginClose?"login-close":""}`}>Login</h1>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: loginClose ? 0 : 1, y: loginClose ? -20 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("email", { required: true })}
                    autoComplete="email"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && <span>Email address is required</span>}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: loginClose ? 0 : 1, y: loginClose ? -20 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="form-floating my-password my-2">
                  <input
                    type={showPassowrd?"text":"password"}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    autoComplete="current-password"
                  />
                  <div onClick={()=>setShowPassowrd(showPassowrd?false:true)} className="eye-icon">{showPassowrd? <FaEyeSlash />:<FaEye />}</div>
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && <span>Password is required</span>}
                </div>
              </motion.div>
              <motion.button
                className="btn btn-dark w-100 py-2 mt-3"
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: loginClose ? 0 : 1, y: loginClose ? -20 : 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Login
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link onClick={(e) => closeLoginFunc(e)}>
                  <p>Register</p>
                </Link>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
