import { combineReducers } from 'redux'
import { contactsReducer } from './contacts/reducer'

export const reducers = combineReducers({
  contacts: contactsReducer,
})
