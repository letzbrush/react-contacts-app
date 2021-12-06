import React from 'react'
import { Button, Tooltip } from 'antd'
import { SortDescendingOutlined, SortAscendingOutlined } from '@ant-design/icons'

import { appConfig } from '../appConfig'
import { SortType } from '../types/SortType'

interface ToggleSortButtonProps {
  currentSortType: SortType
  onClick: () => void
}

const ToggleSortButton = ({ currentSortType, onClick }: ToggleSortButtonProps) => (
  <Tooltip
    title={
      currentSortType === SortType.ASCENDING
        ? 'Sort descending'
        : 'Sort ascending'
    }
    mouseEnterDelay={appConfig.settings.tooltipDelay}
  >
    <Button
      size='large'
      type='primary'
      icon={
        currentSortType === SortType.ASCENDING
          ? (<SortDescendingOutlined/>)
          : (<SortAscendingOutlined/>)
      }
      onClick={onClick}
    />
  </Tooltip>
)

export default ToggleSortButton
