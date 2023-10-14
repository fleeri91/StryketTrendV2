import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {}

const initialState: SettingsState = {}

const stryktipsetSlice = createSlice({
  name: 'stryktipset',
  initialState,
  reducers: {},
})

export const {} = stryktipsetSlice.actions
export const stryktipsetReducer = stryktipsetSlice.reducer
