import { combineReducers } from "redux";

import problemsFilterReducer from "./problems-filter/problems-filter.reducer";

export default combineReducers({ problemsFilter: problemsFilterReducer });
