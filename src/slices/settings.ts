import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store'
import type { Setting } from 'src/types/settings'
import axios from 'src/utils/axios';

interface SettingsState {
  setting: Setting;
}

const initialState: SettingsState = {
  setting: {
    isAuto: false,
    rate: 1
  }
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings(state: SettingsState, action: PayloadAction<Setting>) {
      state.setting = action.payload;
    },
  }
});

export const reducer = slice.reducer;

export const setSettings = (data: any): AppThunk => async (dispatch) => {
  if (data.isAuto) {
    const res = await axios.get('', {});
    if ((typeof res.data) === 'object') {
      data.rate = res.data[0].sale;
    }
  }

  dispatch(slice.actions.setSettings(data));
}

export default slice;
