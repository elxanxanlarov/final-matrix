import { Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect } from 'react';

const PrivateRoute = ({ requiredAdmin }) => {
  const navigate = useNavigate();

  const authUserData = () => {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
  };

  const user = authUserData();

  useEffect(() => {
    if (!user) {
      swal({
        title: "Access Denied",
        text: "Please log in to access this page.",
        icon: "warning",
        button: "OK",
      }).then(() => {
        navigate('/login');
      });
    } else if (requiredAdmin && !user.isAdmin) {
      swal({
        title: "Access Denied",
        text: "You do not have permission to access this page.",
        icon: "warning",
        button: "OK",
      }).then(() => {
        navigate('/profile');
      });
    }
  }, [navigate, user, requiredAdmin]);

  return user && (!requiredAdmin || user.isAdmin) ? <Outlet /> : null;
};

export default PrivateRoute;
