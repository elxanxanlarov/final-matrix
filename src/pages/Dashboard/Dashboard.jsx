import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { productremove } from "../../tools/slices/productSlice";

const Dashboard = () => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch()
  return (
    <>
      <div className="my-container">
        <div>
        <Link to="/dashboard/addproduct" className="btn btn-success my-3">Add</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Photo</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item,index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.title}</td>
                <td><img style={{width:"5rem"}} src={item.img} alt="" /></td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/editproduct/${slugify(item.title)}`} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                  <button onClick={()=>{dispatch(productremove(item.id))}} className="btn btn-danger">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
