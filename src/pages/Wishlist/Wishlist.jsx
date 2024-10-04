import { useContext } from "react";
// import SingleCard from "../../Components/SingleCard/SingleCard";
import "./style.scss";
import { MyContext } from "../../context/WishlistContext";
import SingleCard from "../../Components/SingleCard/SingleCard";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const [wishlist] = useContext(MyContext);
  console.log(wishlist);

  return (
    <div className="wish-list">
      <div className="wish-head">
        <div className="my-container">
          <h2>Wishlist</h2>
        </div>
      </div>
      <div className="wish-body py-5">
        <div className="my-container">
          <div className="row g-4">
            {wishlist.length > 0 ? (
              wishlist.map((item, key) => (
                <SingleCard key={key} product={item} />
              ))
            ) : (
              <div className="wish-empty">
                <div>
                  <h3>Wish Empty</h3>
                  <Link to="/" className="btn btn-dark">Go To Home</Link>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
