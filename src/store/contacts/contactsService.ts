import { appConfig } from '../../appConfig'
import { request } from '../../utils/request'
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
