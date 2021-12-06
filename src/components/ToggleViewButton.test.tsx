import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ViewType } from '../types/ViewType'
import ToggleViewButton from './ToggleViewButton'

describe('ToggleViewButton', () => {
  it(`should render list icon if current state is "grid".`, () => {
    const { container } = render(
      <ToggleViewButton
        currentViewType={ViewType.GRID}
        onClick={() => {}}
      />
    )

    const icon = container.querySelector('svg[data-icon="unordered-list"]')
    expect(icon).toBeTruthy()
  })

  it(`should render grid icon if current state is "list".`, () => {
    const { container } = render(
      <ToggleViewButton
        currentViewType={ViewType.LIST}
        onClick={() => {}}
      />
    )

    const icon = container.querySelector('svg[data-icon="table"]')
    expect(icon).toBeTruthy()
  })

  it(`should fire event callback onClick.`, () => {
    const onClick = jest.fn()

    const { container } = render(
      <ToggleViewButton
        currentViewType={ViewType.GRID}
        onClick={onClick}
      />
    )

    userEvent.click(getByTestId(container, 'toggleView'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
