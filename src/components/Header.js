import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../product.css";

const Header = () => {
  const history = useHistory();
  const handleCart = (e) => {
    e.preventDefault();
    history.push("/cart");
  };
  return (
    <div className="main">
      <div className="header">
        <Link to="/" className="title">
          <h1>Products</h1>
        </Link>
        <button className="btn btn-warning cart_btn" onClick={handleCart}>
          CART
        </button>
      </div>
    </div>
  );
};

export default Header;
