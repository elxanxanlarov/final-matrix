import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { productremove } from "../../tools/slices/productSlice";
import "../Dashboard/dashboard.css";
const Dashboard = () => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <div className="dashboard">
      <div className="my-container">
        <div>
          <Link to="/dashboard/addproduct" className="btn btn-success my-3">
            Add
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="rp-none" scope="col">
                #
              </th>
              <th className="rp-none" scope="col">
                Title
              </th>
              <th className="rp-none" scope="col">
                Photo
              </th>
              <th className="rp-none" scope="col">
                Category
              </th>
              <th className="rp-none" scope="col">
                Price
              </th>
              <th className="md-none" scope="col">
                Product
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item, index) => (
              <tr key={index}>
                <th className="rp-none" scope="row">
                  {index + 1}
                </th>
                <td className="">
                  <img className="md-none" style={{ width: "5rem" }} src={item.img} alt="" />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </td>
                <td className="rp-none">
                  <img style={{ width: "5rem" }} src={item.img} alt="" />
                </td>
                <td className="rp-none">{item.category}</td>
                <td className="rp-none">${item.price}</td>
                <td>
                  <Link
                    to={`/dashboard/editproduct/${slugify(item.title)}`}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(productremove(item.id));
                    }}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
