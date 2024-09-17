import { useDispatch, useSelector } from "react-redux";
import DashbaordForm from "../DashboardForm/DashbaordForm";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import { edit } from "../../../tools/slices/productSlice";

const DashboardEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {slug} = useParams();
  const productData = useSelector(p=>p.product);
  const findData = productData.find(p=>slugify(p.title) === slug);
    return (
      <div className='d-flex align-items-center justify-content-center flex-column'>
          <h1 className='my-5'>Edit Product</h1>
          <DashbaordForm editData = {findData} sendData={fd=>{
            dispatch(edit({id: findData.id,data: [fd]}));
            navigate('/dashboard');
          }} />
      </div>
  )
}

export default DashboardEdit