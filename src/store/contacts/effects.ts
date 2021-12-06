import { dispatch } from '../storeFacade'
import {
  contactsRequest, contactsSuccess, contactsFailure, contactDetailRequest,
  contactDetailRequestFailure, contactDetailRequestSuccess, deleteContactRequest,
  deleteContactFailure, deleteContactSuccess,
} from './reducer'
import { getContactDetail, getContacts, deleteContact } from './contactsService'

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

export const deleteContactDetail = async (id: number) => {
  dispatch(deleteContactRequest())
  try {
    await deleteContact(id)
    dispatch(deleteContactSuccess(id))
  } catch (error) {
    dispatch(deleteContactFailure(error))
  }
}
