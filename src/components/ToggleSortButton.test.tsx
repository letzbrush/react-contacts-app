import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ToggleSortButton from './ToggleSortButton'
import { SortType } from '../types/SortType'

describe('ToggleSortButton', () => {
  it(`should render descending icon if current state is ascending.`, () => {
    const { container } = render(
      <ToggleSortButton
        currentSortType={SortType.ASCENDING}
        onClick={() => {}}
      />
    )

    const icon = container.querySelector('svg[data-icon="sort-descending"]')
    expect(icon).toBeTruthy()
  })

  it(`should render ascending icon if current state is descending.`, () => {
    const { container } = render(
      <ToggleSortButton
        currentSortType={SortType.DESCENDING}
        onClick={() => {}}
      />
    )

    const icon = container.querySelector('svg[data-icon="sort-ascending"]')
    expect(icon).toBeTruthy()
  })

  it(`should fire event callback onClick.`, () => {
    const onClick = jest.fn()

    const { container } = render(
      <ToggleSortButton
        currentSortType={SortType.ASCENDING}
        onClick={onClick}
      />
    )

    userEvent.click(getByTestId(container, 'toggleSort'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
