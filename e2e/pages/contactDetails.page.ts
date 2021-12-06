import { Selector } from 'testcafe'

class ContactDetailsPage {
  goBackBtn = Selector('[data-testid="goBackBtn"]')
  editAction = Selector('button').withText('Edit')
  deleteAction = Selector('button').withText('Delete')
}

const contactDetailsPage = new ContactDetailsPage()
export default contactDetailsPage
