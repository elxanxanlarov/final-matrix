import { useState } from "react";
import Cards from "react-credit-cards-2";
import "./check.css"; 
import 'react-credit-cards-2/dist/es/styles-compiled.css'
const Check = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    let { name, value } = evt.target;

    if (name === "number") {
      value = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Payment information submitted!");
  };

  return (
    <div className="my-container row p-5">
        <div className="col-md-6">
            <div className="checkout-container">
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="input-group">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength="19" // 16 rəqəm və 3 boşluq
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
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
                    placeholder="Expiry Date (MM/YY)"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength="5" // MM/YY formatı üçün məhdudlaşdırma
                    pattern="\d{2}/\d{2}"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength="3"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
        </div>
       <div className="col-md-6">
         <div>
             Total
         </div>
       </div>
    </div>
  );
};

export default Check;
