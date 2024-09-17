import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin</h1>
      <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
      <button onClick={handleLogout} className="btn btn-danger">
        Log Out
      </button>
    </div>
  );
};

export default Admin;
