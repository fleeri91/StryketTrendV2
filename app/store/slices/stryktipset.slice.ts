import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Draw } from 'types/stryktipset'

interface StryktipsetState {
  draws: Draw[]
}

const initialState: StryktipsetState = {
  draws: [],
}

const stryktipsetSlice = createSlice({
  name: 'stryktipset',
  initialState,
  reducers: {
    addDraw: (state, action: PayloadAction<Draw>) => {
      state.draws = [...state.draws, action.payload]
    },
  },
})

export const { addDraw } = stryktipsetSlice.actions
export const stryktipsetReducer = stryktipsetSlice.reducer
