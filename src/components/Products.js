import React, { useEffect, useState } from "react";
import "../product.css";
import { connect } from "react-redux";

import { FetchProductAction, addToCart } from "../redux/actions/productActions";

const Products = (props) => {
  const { products, FetchProductAction, addToCart } = props;

  useEffect(() => {
    FetchProductAction();
  }, [FetchProductAction]);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <>
      {data?.map((item, index) => (
        <div className="main" key={index}>
          <div className="card" style={{ width: "18rem", height: "500px" }}>
            <img
              src={item?.filename}
              className="card-img-top image"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item?.title}</h5>
              <h5 className="card-type">{item?.type}</h5>
              <p className="card-text">"{item?.description}"</p>
              <h5 className="card-price">$ {item?.price}</h5>
              <h5 className="card-rating">Rating {item?.rating}</h5>

              <button
                className="btn btn-primary"
                onClick={() => addToCart(item.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  FetchProductAction: () => dispatch(FetchProductAction()),
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
