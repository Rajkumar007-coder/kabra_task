import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import { FetchProductReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  productData: FetchProductReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
