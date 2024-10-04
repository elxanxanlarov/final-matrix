import { useSelector } from "react-redux";
import "./ResultCheck.css";
import SingleCard from "../../Components/SingleCard/SingleCard";
import { t } from "i18next";
import { Link } from "react-router-dom";

const ResultCheck = () => {
  const productData = useSelector((state) => state.product);
  const langProduct = productData.filter(
    (item) => item.lang == t("productLang")
  );

  return (
    <div className="result-check dp-center text-center p-5">
      <div className="result-con ">
        <div>
          <img
            style={{ width: "100px" }}
            src="https://centerforaddictionstudies.com/wp-content/uploads/success-green-check-mark-icon.png"
            alt=""
          />
        </div>
        <h3>Thank You for Your Order!</h3>
        <p>
          Your order has been successfully placed. We appreciate your business
          and can't wait for you to enjoy your purchase!
        </p>
        <Link to="/" className="btn btn-dark mt-5">Go To Home</Link>
        <div className="best-body row g-5 mt-4">
          {langProduct.slice(0,4).map((item) => (
            <SingleCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCheck;
