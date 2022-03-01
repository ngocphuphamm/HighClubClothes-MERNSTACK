import { combineReducers } from "redux";
import { collectionsReducer } from "./tops.js";
import { loadingState } from "./loading.js";

const rootReducer = combineReducers({
	collections: collectionsReducer,
	loadingState,
});

export default rootReducer;
