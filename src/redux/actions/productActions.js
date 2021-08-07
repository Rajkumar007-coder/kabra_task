import * as actionTypes from "../contants/action-types";

import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../contants/action-types";

export const FetchProductAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST,
    });
    const response = await axios.get(
      "https://api4286.s3.ap-south-1.amazonaws.com/products.json"
    );
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
