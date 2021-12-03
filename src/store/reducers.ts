import { combineReducers } from 'redux'
import { contactsReducer } from './contacts/reducer'
import { networkStateReducer } from './networkState/reducer'

export const reducers = combineReducers({
  contacts: contactsReducer,
  network: networkStateReducer,
})
