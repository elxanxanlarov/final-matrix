import { useContext, useEffect } from "react";
import swal from "sweetalert";
import { AddtoCartContext } from "../../context/AddToCartContext";
import { MdDelete } from "react-icons/md";
import "./cart.scss";
import { Link } from "react-router-dom";
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
  const calculateSubtotal = () => {
    return uniqueProducts.reduce((total, product) => {
      const productQuantity = addToCart.filter((p) => p.id === product.id).length;
      const productTotal = product.price * productQuantity;
      return total + productTotal;
    }, 0);
  };

  return (
   <div className="cart-page">
     <div className="my-container">
       {uniqueProducts.length === 0 ? (
         <div className="d-flex align-items-center justify-content-center">
           <img
             src="https://mcivils.ir/wp-content/themes/megawp/img/cart-empty.gif"
             alt=""
           />
         </div>
       ) : (
         <div >
           <h1 className="text-center py-5">Cart Page</h1>
           <table className="table">
             <thead>
               <tr>
                 <th scope="col">Photo</th>
                 <th className="rp-none" scope="col">Price</th>
                 <th scope="col">Quantity</th>
                 <th scope="col">Delete</th>
               </tr>
             </thead>
             <tbody>
               {uniqueProducts.map((item, index) => (
                 <tr key={index}>
                   <td>
                     <div className="dp-align gap-2 product">
                       <img src={item.img} style={{ width: "120px" }} alt="" />
                       <div>
                         <p>{item.title}</p>
                         <p>{item.category}</p>
                       </div>
                     </div>
                   </td>
                   <td className="price-con">
                     <div>
                       <p className="price">
                         ${parseFloat(item.price).toFixed(3)*(addToCart.filter((p) => p.id === item.id).length)}
                       </p>
                     </div>
                     <div className="dp-between gap-2 btns-con">
                       <button
                         className="my-btn one"
                         onClick={() => decreaseQuantity(item.id)}
                       >
                         -
                       </button>
                       <p>{addToCart.filter((p) => p.id === item.id).length}</p>
                       <button
                         className="my-btn"
                         onClick={() => increaseQuantity(item.id)}
                       >
                         +
                       </button>
                     </div>
                   </td>
                   <td className="rp-none">
                     <div className="dp-between gap-2 btns-con ">
                       <button
                         className="my-btn one"
                         onClick={() => decreaseQuantity(item.id)}
                       >
                         -
                       </button>
                       <p>{addToCart.filter((p) => p.id === item.id).length}</p>
                       <button
                         className="my-btn"
                         onClick={() => increaseQuantity(item.id)}
                       >
                         +
                       </button>
                     </div>
                   </td>
                   <td>
                     <div>
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
                         <MdDelete />
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
           <div className="total">
             <div>
               <div>
                 <p>
                 <span>Subtotal:</span> ${calculateSubtotal()}
                 </p>
               </div>
               <div className="btn-con">
                 {/* <div className="btn btn-danger">Clear All</div> */}
                 <Link to="/checkout" className="btn btn-dark ms-3">Check Out</Link>
               </div>
             </div>
           </div>
         </div>
       )}
     </div>
   </div>
  );
};

export default Basket;
