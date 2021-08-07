import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QTY,
} from "../contants/action-types";

const initialState = {
  products: {
    loading: false,
    data: [],
    errorMSg: "",
  },
  cart: [],
};

export const FetchProductReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return {
        ...previousState,
        products: {
          ...previousState.products,
          loading: true,
          data: [],
          errorMSg: "",
        },
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...previousState,
        products: {
          loading: false,
          data: action.payload.data,
          errorMSg: "",
        },
      };
    }
    case FETCH_PRODUCTS_FAIL: {
      return {
        ...previousState,
        products: {
          loading: false,
          data: [],
          errorMSg: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      const products = previousState.products.data;
      const item = products.find((product) => product.id === action.payload.id);

      const inCartIndex = previousState.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingCart = [...previousState.cart];
      if (inCartIndex > -1) {
        existingCart = existingCart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        existingCart.push({ ...item, qty: 1 });
      }

      return {
        ...previousState,
        cart: existingCart,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...previousState,
        cart: previousState.cart.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case ADJUST_ITEM_QTY:
      return {
        ...previousState,
        cart: previousState.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default: {
      return previousState || initialState;
    }
  }
};
