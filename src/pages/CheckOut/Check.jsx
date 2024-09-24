import { useContext, useState } from "react";
import Cards from "react-credit-cards-2";
import "./check.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import { AddtoCartContext } from "../../context/AddToCartContext";
import swal from "sweetalert";
import { useTranslation } from "react-i18next"; // İmport edin

const Check = () => {
  const { t } = useTranslation(); // useTranslation hookunu çağır
  const [addToCart, setAddToCart] = useContext(AddtoCartContext);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const uniqueProducts = addToCart.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  const calculateSubtotal = () => {
    return uniqueProducts.reduce((total, product) => {
      const productQuantity = addToCart.filter((p) => p.id === product.id).length;
      const productTotal = product.price * productQuantity;
      return total + productTotal;
    }, 0);
  };

  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    let { name, value } = evt.target;

    if (name === "number") {
      value = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    swal(t("checkout.title"), t("checkout.description"), "success").then(
      () => {
        setAddToCart([]);
        localStorage.removeItem("addtocart");
        navigate("/");
      }
    );
  };

  return (
    <div className="check-page">
      <div className="my-container row">
        <div className="col-md-6">
          <div className="checkout-container">
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <form onSubmit={handleSubmit} className="checkout-form pt-5">
              <div className="input-group">
                <input
                  type="tel"
                  name="number"
                  placeholder={t("checkout.cardNumber")} // Tərcümə edilmiş mətn
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength="19"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t("checkout.cardholderName")} // Tərcümə edilmiş mətn
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="expiry"
                  placeholder={t("checkout.expiryDate")} // Tərcümə edilmiş mətn
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength="5"
                  pattern="\d{2}/\d{2}"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="cvc"
                  placeholder={t("checkout.cvc")} // Tərcümə edilmiş mətn
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength="3"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                {t("checkout.submit")}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="total">
            <div>
              <p>
                <span>{t("checkout.subtotal")}:</span> ${calculateSubtotal()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
