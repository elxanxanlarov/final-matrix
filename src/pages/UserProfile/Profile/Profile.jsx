import "./style.scss";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <p>Salam</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Log Out
      </button>
    </>
  );
};

export default Profile;
