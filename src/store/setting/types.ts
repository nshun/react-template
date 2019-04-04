export interface Setting {
  count: number;
}

export const UPDATE_SETTINGS = "UPDATE_SETTINGS";

interface UpdateSettingsAction {
  type: typeof UPDATE_SETTINGS;
  setting: Setting;
}

export type SettingActionTypes = UpdateSettingsAction;
