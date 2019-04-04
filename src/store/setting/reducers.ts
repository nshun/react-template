import { Setting, SettingActionTypes, UPDATE_SETTINGS } from "./types";

const initialState: Setting = {
  count: 10,
};

export default function settingReducer(
  state = initialState,
  action: SettingActionTypes
): Setting {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.setting,
      };
    default:
      return state;
  }
}
