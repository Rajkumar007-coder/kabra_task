import React, { useState } from "react";
import { connect } from "react-redux";
import "../components/CartItem.css";
import { adjustItemQty, removeFromCart } from "../redux/actions/productActions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.filename} alt={item.title} />
      <div className="cart_detail_body">
        <div className="cartItem__details">
          <p className="details__title">{item.title}</p>
          <p className="details__desc">{item.description}</p>
        </div>
        <div className="cartItem__actions">
          <p className="details__price">$ {item.price}</p>

          <div className="cartItem__qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="actions__deleteItemBtn"
          >
            <img
              src="https://image.flaticon.com/icons/svg/709/709519.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
