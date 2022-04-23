import { createStore , applyMiddleware } from "redux";
import rootreducer from "../reducer/index";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;