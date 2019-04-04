import { combineReducers } from "redux";

import settingReducer from "./setting/reducers";

export const rootReducer = combineReducers({
  setting: settingReducer,
});
