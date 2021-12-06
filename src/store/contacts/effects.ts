import { dispatch } from '../storeFacade'
import {
  contactsRequest, contactsSuccess, contactsFailure, contactDetailRequest,
  contactDetailRequestFailure, contactDetailRequestSuccess, deleteContactRequest,
  deleteContactFailure, deleteContactSuccess, updateContactRequest, updateContactFailure,
  updateContactSuccess,
} from './reducer'
import { getContactDetail, getContacts, deleteContact, updateContact } from './contactsService'
import { Contact } from '../../types/Contact'

export const fetchContacts = async () => {
  dispatch(contactsRequest())
  try {
    const contacts = await getContacts()
    dispatch(contactsSuccess(contacts))
  } catch (error) {
    dispatch(contactsFailure(error))
  }
}

export const fetchContactDetail = async (id: number) => {
  dispatch(contactDetailRequest())
  try {
    const contactDetail = await getContactDetail(id)
    dispatch(contactDetailRequestSuccess(contactDetail))
  } catch (error) {
    dispatch(contactDetailRequestFailure(error))
  }
}

export const updateContactDetail = async (contact: Contact) => {
  dispatch(updateContactRequest())
  try {
    const updatedContact = await updateContact(contact)
    dispatch(updateContactSuccess(updatedContact))
  } catch (error) {
    dispatch(updateContactFailure(error))
  }
}

export const deleteContactDetail = async (id: number) => {
  dispatch(deleteContactRequest())
  try {
    await deleteContact(id)
    dispatch(deleteContactSuccess(id))
  } catch (error) {
    dispatch(deleteContactFailure(error))
  }
}
