import { createStore } from "redux";
import { coutReducer } from "./redux/reducer/userReducer";

const store=createStore(
    coutReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store