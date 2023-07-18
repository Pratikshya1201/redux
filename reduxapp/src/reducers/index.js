// import all the reducers created here
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

//make one root reducer to keep all the reducers created in a single place
const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;