import React, { MouseEventHandler, useCallback } from 'react'
import { Skeleton, Card, Avatar, Space, Row, Col, List, Divider, Typography, Button, Tooltip } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  ExpandOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons'

import styles from './ContactsListEntry.module.less'
import { Contact } from '../types/Contact'
import { useHistory } from 'react-router'
import { appConfig } from '../appConfig'
import EditContactAction from './EditContactAction'
import DeleteContactAction from './DeleteContactAction'

const { Meta } = Card
const { Text } = Typography

interface ContactsListEntryProps {
  contactDetail?: Contact
  isLoading: boolean
}

const ContactsListEntry = ({
  contactDetail,
  isLoading,
}: ContactsListEntryProps) => {
  const history = useHistory()

  const navigateToContactDetail = useCallback(() => {
    if (contactDetail) {
      history.push(appConfig.navRoutes.contactDetail(contactDetail.id))
    }
  }, [contactDetail, history])

  const openContact: MouseEventHandler = useCallback(event => {
    event.stopPropagation()
    navigateToContactDetail()
  }, [navigateToContactDetail])

  return (
    <List.Item>
      <Card
        hoverable
        onClick={navigateToContactDetail}
        className={styles.card}
      >
        <Skeleton
          loading={isLoading}
          paragraph={false}
          avatar
          active
        >
          <Row align='middle'>
            <Col flex='auto'>
              <Meta
                avatar={
                  <Tooltip
                    title={contactDetail?.username}
                    mouseEnterDelay={appConfig.settings.tooltipDelay}
                  >
                    <Avatar src={contactDetail?.avatarUrl} size={54}/>
                  </Tooltip>
                }
                title={contactDetail?.name}
                description={
                  <Space>
                    <Space>
                      <MailOutlined/>
                      <Text>{contactDetail?.email}</Text>
                    </Space>
                    <Space>
                      <PhoneOutlined/>
                      <Text>{contactDetail?.phone}</Text>
                    </Space>
                  </Space>
                }
              />
            </Col>
            <Col flex='none'>
              <Space>
                <Button
                  key="openDetail"
                  type='link'
                  icon={<ExpandOutlined/>}
                  onClick={openContact}
                />
                <Divider type='vertical'/>
                <EditContactAction
                  key='edit'
                  contact={contactDetail}
                  renderAction={
                    onClick => (
                      <Button
                        type='link'
                        icon={<EditOutlined/>}
                        onClick={onClick}
                      />
                    )
                  }
                />
                <Divider type='vertical'/>
                <DeleteContactAction
                  key='delete'
                  contact={contactDetail}
                  renderAction={
                    onClick => (
                      <Button
                        type='link'
                        icon={<DeleteOutlined/>}
                        onClick={onClick}
                      />
                    )
                  }
                />
              </Space>
            </Col>
          </Row>
        </Skeleton>
      </Card>
    </List.Item>
  )
}

export default ContactsListEntry
