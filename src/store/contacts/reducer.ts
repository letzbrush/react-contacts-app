import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact } from '../../types/Contact'
import { requestFailureReducer } from '../../utils/requestFailureReducer'
import { Dictionary } from '../../types/Dictionary'


interface ContactsState {
  contacts: Contact[]
  contactDetails: Dictionary<Contact>
}

export const initialContactsState: ContactsState = {
  contacts: [],
  contactDetails: {},
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
    contactDetailRequest: () => {},
    contactDetailRequestFailure: requestFailureReducer,
    contactDetailRequestSuccess: (
      state,
      action: PayloadAction<Contact>
    ) => {
      const newContact = action.payload
      state.contactDetails[newContact.id] = newContact
    },
  },
})

export const {
  contactsRequest,
  contactsFailure,
  contactsSuccess,
  contactDetailRequest,
  contactDetailRequestFailure,
  contactDetailRequestSuccess,
} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer
