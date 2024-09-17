import { useContext, useEffect } from "react";
import swal from "sweetalert";
import { AddtoCartContext } from "../../context/AddToCartContext";
import "./cart.scss";
const Basket = () => {
  const [addToCart, setAddToCart] = useContext(AddtoCartContext);

  useEffect(() => {
    localStorage.setItem("addtocart", JSON.stringify(addToCart));
  }, [addToCart]);

  const uniqueProducts = addToCart.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  const deleteProduct = (id) => {
    const updatedCart = addToCart.filter((product) => product.id !== id);
    setAddToCart(updatedCart);
    localStorage.setItem("addtocart", JSON.stringify(updatedCart));
    swal("Poof! Your product has been deleted!", {
      icon: "success",
    });
  };

  const increaseQuantity = (id) => {
    const updatedCart = [
      ...addToCart,
      addToCart.find((product) => product.id === id),
    ];
    setAddToCart(updatedCart);
    localStorage.setItem("addtocart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    setAddToCart(
      addToCart.filter(
        (product, index) =>
          index !== addToCart.findIndex((product) => product.id === id)
      )
    );
    localStorage.setItem("addtocart", JSON.stringify(addToCart));
  };

  return (
    <div className="my-container">
      {uniqueProducts.length === 0 ? (
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="https://mcivils.ir/wp-content/themes/megawp/img/cart-empty.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
          <h1 className="text-center my-5">Cart Page</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {uniqueProducts.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={item.img} style={{ width: "70px" }} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>${parseFloat(item.price).toFixed(3)}</td>
                  <td>
                    <div className="dp-align gap-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <p>{addToCart.filter((p) => p.id === item.id).length}</p>
                      <button
                        className="btn btn-success"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: "Once deleted, you will not be able to recover this product!",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            deleteProduct(item.id);
                          }
                        });
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
          <div className="total">
            <div>
              <div>
                <p>
                  <span>Subtotal:</span>$59999
                </p>
                <p>
                  <span>Product:1</span>
                </p>
              </div>
              <div className="btn-con">
                <div className="btn btn-danger">Clear All</div>
                <div className="btn btn-success ms-3">Check Out</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
