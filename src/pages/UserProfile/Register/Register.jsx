import{ useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./style.scss";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const onSubmit = (data) => {
    const existingUser = userData.find(user => user.email === data.email);

    if (existingUser) {
      swal({
        title: "Error",
        text: "This email is already registered.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    setUserData((prevUserData) => [...prevUserData, data]);

    swal({
      title: "Success!",
      text: "You have successfully registered!",
      icon: "success",
      button: "OK",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="col-md-3 col-sm-12 col-12 mx-auto my-5">
      <div className="form-con">
        <form onSubmit={handleSubmit(onSubmit)} className="active">
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="your name"
              {...register("username", { required: true })}
              autoComplete="name"
            />
            <label htmlFor="floatingInput">Your Name</label>
            {errors.username && <span>Username is required</span>}
          </div>
          <div className="form-floating my-2">
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
              {...register("password", { 
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                }
              })}
              autoComplete="new-password"
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button className="btn btn-dark w-100 py-2 mt-3" type="submit">
            Sign Up
          </button>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
