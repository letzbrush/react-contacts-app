import * as contactsEffects from '../store/contacts/effects'

export const MockFactory = {
  contactsEffects: () => Object.defineProperties(contactsEffects, {
    deleteContactDetail: {
      value: jest.fn(),
    },
  })
}
