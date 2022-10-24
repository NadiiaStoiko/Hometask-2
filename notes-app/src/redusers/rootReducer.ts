
import { combineReducers } from "redux";
import { noteReducer} from './notesReducer'

const rootReducer = () => combineReducers({ noteReducer});
export default rootReducer;
export type rootState = ReturnType<typeof rootReducer>;
