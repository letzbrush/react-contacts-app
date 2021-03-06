import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact } from '../../types/Contact'
import { requestFailureReducer } from '../../utils/requestFailureReducer'
import { Dictionary } from '../../types/Dictionary'
import { ViewType } from '../../types/ViewType'
import { SortType } from '../../types/SortType'


interface ContactsState {
  contacts: Contact[]
  contactDetails: Dictionary<Contact>
  currentView: ViewType
  currentSorting: SortType
}

export const initialContactsState: ContactsState = {
  contacts: [],
  contactDetails: {},
  currentView: ViewType.GRID,
  currentSorting: SortType.ASCENDING,
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
    updateContactRequest: () => {},
    updateContactFailure: requestFailureReducer,
    updateContactSuccess: (
      state,
      action: PayloadAction<Contact>
    ) => {
      const updatedContact = action.payload
      state.contacts = state.contacts.map(contact => (
        contact.id === updatedContact.id
          ? updatedContact
          : contact
      ))
      state.contactDetails[updatedContact.id] = updatedContact
    },
    deleteContactRequest: () => {},
    deleteContactFailure: requestFailureReducer,
    deleteContactSuccess: (
      state,
      action: PayloadAction<number>
    ) => {
      state.contacts = state.contacts.filter(contact => (
        contact.id !== action.payload
      ))
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
    toggleView: state => {
      state.currentView = state.currentView === ViewType.GRID
        ? ViewType.LIST
        : ViewType.GRID
    },
    toggleSorting: state => {
      state.currentSorting = state.currentSorting === SortType.ASCENDING
        ? SortType.DESCENDING
        : SortType.ASCENDING
    },
  },
})

export const {
  contactsRequest,
  contactsFailure,
  contactsSuccess,
  updateContactRequest,
  updateContactFailure,
  updateContactSuccess,
  deleteContactRequest,
  deleteContactFailure,
  deleteContactSuccess,
  contactDetailRequest,
  contactDetailRequestFailure,
  contactDetailRequestSuccess,
  toggleView,
  toggleSorting,
} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer
