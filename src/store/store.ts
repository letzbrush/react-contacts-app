import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reducers'

const initialState = {}

export const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
