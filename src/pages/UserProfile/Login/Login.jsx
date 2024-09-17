import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const adminData = {
  adminEmail: "admin@gmail.com",
  adminPassword: "admin1234"
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit=(data)=>{
    const savedUserData=localStorage.getItem("userData");        
    const userData=JSON.parse(savedUserData);
    const user=userData.find(user => user.email === data.email && user.password === data.password);    
    const isAdmin = data.email === adminData.adminEmail && data.password === adminData.adminPassword;
    if(user || isAdmin){
      localStorage.setItem("currentUser", JSON.stringify({ email: data.email, isAdmin }));
      if (isAdmin) {
        console.log("Navigating to admin page");
        navigate("/admin"); // Admin səhifəsinə yönləndir
      } else {
        navigate("/profile"); // Profil səhifəsinə yönləndir
      }
    }else{
      console.log("nor");
    }
    
  }
  return (
    <div className="col-md-3 col-sm-12 col-12 mx-auto my-5">
      <div className="form-con">
        <form onSubmit={handleSubmit(onSubmit)} className="active">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
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
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("password", { required: true })}
              autoComplete="current-password"
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && <span>Password is required</span>}
          </div>
          <button className="btn btn-dark w-100 py-2 mt-3" type="submit">
            Login
          </button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
