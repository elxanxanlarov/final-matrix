import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashbaordForm from "../DashboardForm/DashbaordForm";
import { add } from "../../../tools/slices/productSlice";

const DashboardAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='d-flex align-items-center justify-content-center flex-column py-4'>
        <h1 className='my-5'>Add Product</h1>
        <DashbaordForm sendData={fd=>{
          dispatch(add(fd));
          navigate('/dashboard');
        }} />
    </div>
  )

}

export default DashboardAdd