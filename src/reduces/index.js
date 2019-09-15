import {combineReducers} from "redux"
import list from "./list"
import detalis from "./detalis";
import user from "./user";
let Reducers = combineReducers({
    list,
    detalis,
    user
})
export default Reducers