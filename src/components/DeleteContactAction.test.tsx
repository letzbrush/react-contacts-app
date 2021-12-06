import React from 'react'
import { render, getByTestId, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DeleteOutlined } from '@ant-design/icons'
import DeleteContactAction from './DeleteContactAction'
import { mockContacts } from '../mocks/contacts'
import { MockFactory } from '../mocks/mockFactory'
import { deleteContactDetail } from '../store/contacts/effects'

MockFactory.contactsEffects()

describe('DeleteContactAction', () => {
  it(`should show modal on click`, () => {
    const contact = mockContacts[0]

    const { container } = render(
      <DeleteContactAction
        contact={contact}
        renderAction={
          onClick => (<DeleteOutlined data-testid='deleteAction' onClick={onClick}/>)
        }
      />
    )

    userEvent.click(getByTestId(container, 'deleteAction'))
    expect(screen.getByText('Delete Contact')).toBeVisible()
  })

  it(`should call delete effect when confirming`, async () => {
    const contact = mockContacts[0]

    const { container } = render(
      <DeleteContactAction
        contact={contact}
        renderAction={
          onClick => (<DeleteOutlined data-testid='deleteAction' onClick={onClick}/>)
        }
      />
    )

    await act(async () => {
      await userEvent.click(getByTestId(container, 'deleteAction'))
      await userEvent.click(screen.getByText('Yes'))
      expect(deleteContactDetail).toBeCalledTimes(1)
    })
  })
})
