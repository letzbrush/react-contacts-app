import { appConfig } from '../../appConfig'
import { request } from '../../utils/request'
import { Contact } from '../../types/Contact'

export const getContacts = async () => request<Contact[]>(
  appConfig.apiRoutes.contacts
)
