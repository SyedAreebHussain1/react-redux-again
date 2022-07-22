import red from "./reducers";
import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(red,applyMiddleware(thunk))
export default store