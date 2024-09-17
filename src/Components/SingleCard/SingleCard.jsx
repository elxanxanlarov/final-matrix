import { FaCartPlus, FaHeart } from "react-icons/fa";
import "./style.scss";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/WishlistContext";
import { AddtoCartContext } from "../../context/AddToCartContext";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { toast } from "react-toastify";

const SingleCard = ({ product }) => {
  const [wishlist, setWishlist] = useContext(MyContext);
  const [addToCart, setAddToCart] = useContext(AddtoCartContext);
  const [isClicked, setIsClicked] = useState(false);
  const prodcutTitle = product.title?.slice(0, 12) + (product.title.length > 20 ? "..." : "");
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("addtocart", JSON.stringify(addToCart));
  }, [wishlist, addToCart]);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleAddToCart = () => {
    setAddToCart((prevAddToCart) => [...prevAddToCart, product]);
    setIsClicked(true);
    toast.success("Product added to cart");

    setTimeout(() => setIsClicked(false), 200);
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
      toast.info("Product removed from wishlist");
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      toast.success("Product added to wishlist");
    }
  };

  const titleSlug = typeof product.title === 'string' ? slugify(product.title) : '';

  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      className="col-md-3 col-sm-6 col-12"
    >
      <div className="home">
        <div className="my-card">
          <div className="img-block">
            <img src={product.img} alt={product.title} />
            <div className="icons dp-cloumn">
              <div
                className={`icon-container ${isClicked ? 'clicked' : ''}`}
                onClick={toggleAddToCart}
              >
                <FaCartPlus />
              </div>
              <Link className="link" to={`/products/${titleSlug}`}>
                <IoEyeOutline />
              </Link>
              <div
                className={`icon-container ${isInWishlist ? 'clicked' : ''}`}
                onClick={toggleWishlist}
              >
                {isInWishlist ? <FaHeart /> : <CiHeart />}
              </div>
            </div>
          </div>
          <div className="text-con">
            <Link to={`/products/${titleSlug}`} className="link"><h4>{prodcutTitle}</h4></Link>
            <p>From ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
