import { dispatch } from '../storeFacade'
import { contactsRequest, contactsSuccess, contactsFailure } from './reducer'
import { getContacts } from './contactsService'

export const fetchContacts = async () => {
  dispatch(contactsRequest)
  try {
    const contacts = await getContacts()
    dispatch(contactsSuccess(contacts))
  } catch (error) {
    dispatch(contactsFailure(error))
  }
}
