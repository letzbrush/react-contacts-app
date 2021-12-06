import { Selector } from 'testcafe'

class ContactsPage {
  toggleSortBtn = Selector('[data-testid="toggleSort"]')
  toggleViewBtn = Selector('[data-testid="toggleView"]')

  contactCards = {
    card: Selector('[data-testid="contactCard"]'),
    openAction: Selector('main [data-icon="expand"]'),
    editAction: Selector('main [data-icon="edit"]'),
    deleteAction: Selector('main [data-icon="delete"]'),
  }
}

const contactsPage = new ContactsPage()
export default contactsPage
