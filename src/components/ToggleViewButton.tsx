import React from 'react'
import { Button, Tooltip } from 'antd'
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons'

import { ViewType } from '../types/ViewType'
import { appConfig } from '../appConfig'

interface ToggleViewButtonProps {
  currentViewType: ViewType
  onClick: () => void
}

const ToggleViewButton = ({ currentViewType, onClick }: ToggleViewButtonProps) => (
  <Tooltip
    title={
      currentViewType === ViewType.GRID
        ? 'Show list view'
        : 'Show grid view'
    }
    mouseEnterDelay={appConfig.settings.tooltipDelay}
  >
    <Button
      size='large'
      type='primary'
      data-testid='toggleView'
      icon={
        currentViewType === ViewType.GRID
          ? (<UnorderedListOutlined/>)
          : (<TableOutlined/>)
      }
      onClick={onClick}
    />
  </Tooltip>
)

export default ToggleViewButton
