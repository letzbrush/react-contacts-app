import { Address } from './Address'
import { Company } from './Company'

export interface JsonPlaceholderContact {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
  company: Company
}

export interface Contact extends JsonPlaceholderContact{
  avatarUrl: string
}
