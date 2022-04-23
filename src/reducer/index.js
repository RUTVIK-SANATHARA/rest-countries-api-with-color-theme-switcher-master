import reducer from "./perform";
import { combineReducers } from "redux";


const rootreducer = combineReducers(
    {
        items:reducer
    }
)

export default rootreducer;