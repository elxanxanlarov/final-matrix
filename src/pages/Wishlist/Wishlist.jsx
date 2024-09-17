import { useContext } from "react";
// import SingleCard from "../../Components/SingleCard/SingleCard";
import "./style.scss";
import { MyContext } from "../../context/WishlistContext";
import SingleCard from "../../Components/SingleCard/SingleCard";
const Wishlist = () => {
    const [wishlist]=useContext(MyContext)
    console.log(wishlist);
    
  return (
    <div className="wish-list">
      <div className="wish-head">
        <div className="my-container">
          <h2>Wishlist</h2>
        </div>
      </div>
      <div className="wish-body my-5">
        <div className="my-container">
          <div className="row g-4">
            {wishlist.length>0?wishlist.map((item,key) => (
                <SingleCard key={key} product={item} />
              ))
              : <h3>Wishlist is empty</h3>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
