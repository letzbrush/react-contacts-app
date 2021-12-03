import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact } from '../../types/Contact'
import { requestFailureReducer } from '../../utils/requestFailureReducer'


interface ContactsState {
  contacts: Contact[]
}

export const initialContactsState: ContactsState = {
  contacts: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    contactsRequest: () => {},
    contactsFailure: requestFailureReducer,
    contactsSuccess: (
      state,
      action: PayloadAction<Contact[]>
    ) => {
      state.contacts = action.payload
    },
  },
})

export const {
  contactsRequest,
  contactsFailure,
  contactsSuccess,
} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer
