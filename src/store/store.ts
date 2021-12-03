import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reducers'
import { initialContactsState } from './contacts/reducer'
import { initialNetworkState } from './networkState/reducer'

const initialState = {
  contacts: initialContactsState,
  network: initialNetworkState,
}

export const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
