import { appConfig } from '../../appConfig'
import { request, putRequest, deleteRequest } from '../../utils/request'
import { Contact, JsonPlaceholderContact } from '../../types/Contact'

const getAvatarUrl = (username: string) => (
  `https://avatars.dicebear.com/api/miniavs/${username}.svg?mood[]=happy&mustache[]=horshoe&mustacheProbability=100`
)

export const getContacts = async () => {
  const jsonPlaceholderContacts = await request<JsonPlaceholderContact[]>(
    appConfig.apiRoutes.contacts
  )
  return jsonPlaceholderContacts.map(contact => ({
    ...contact,
    avatarUrl: getAvatarUrl(contact.username),
  } as Contact))
}

export const getContactDetail = async (id: number) => {
  const jsonPlaceholderContact = await request<JsonPlaceholderContact>(
    appConfig.apiRoutes.contactDetail(id)
  )
  return {
    ...jsonPlaceholderContact,
    avatarUrl: getAvatarUrl(jsonPlaceholderContact.username),
  } as Contact
}

export const updateContact = async (contact: Contact) => (
  putRequest<Contact>(
    appConfig.apiRoutes.contactDetail(contact.id),
    contact,
  )
)

export const deleteContact = async (id: number) => (
  deleteRequest(
    appConfig.apiRoutes.contactDetail(id)
  )
)
