import { Selector } from 'testcafe'
import contactsPage from './pages/contacts.page'
import contactDetailsPage from './pages/contactDetails.page'

fixture('Contacts')
  .page('http://localhost:3000/')

test('view, sort, edit and delete contacts', async t => {
  const testName = 'TEST_NAME'
  await t
    .click(contactsPage.toggleSortBtn)
    .click(contactsPage.toggleViewBtn)
    .click(contactsPage.toggleViewBtn)
    .click(contactsPage.contactCards.card.nth(0))
    .click(contactDetailsPage.goBackBtn)
    .click(contactsPage.contactCards.deleteAction.nth(1))
    .click(Selector('button').withText('Yes'))
    .expect(Selector('.ant-notification-notice-icon-success').filterVisible().exists).ok()
    .click(contactsPage.contactCards.openAction.nth(3))
    .click(contactDetailsPage.editAction)
    .typeText(Selector('#name'), testName, { replace: true })
    .click(Selector('button').withText('Save'))
    .expect(Selector('.ant-notification-notice-icon-success').filterVisible().visible).ok()
    .expect(Selector('main h2').withText('TEST_NAME').visible).ok()
    .click(Selector('button').withText('Delete'))
    .click(Selector('button').withText('Yes'))
    .expect(Selector('.ant-notification-notice-icon-success').filterVisible().visible).ok()
    .expect(contactsPage.contactCards.card.count).gt(1)
})
