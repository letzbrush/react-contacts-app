import React, { MouseEventHandler, useCallback } from 'react'
import { Skeleton, Card, Avatar, Space, Row, Col, List, Divider, Typography } from 'antd'
import { EditOutlined, DeleteOutlined, ExpandOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'

import styles from './ContactsListEntry.module.less'
import { Contact } from '../types/Contact'
import { useHistory } from 'react-router'
import { appConfig } from '../appConfig'

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
    console.log('openContact')
  }, [navigateToContactDetail])

  const editContact: MouseEventHandler = useCallback(event => {
    event.stopPropagation()
    console.log('editContact')
  }, [])

  const deleteContact: MouseEventHandler = useCallback(event => {
    event.stopPropagation()
    console.log('deleteContact')
  }, [])

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
                avatar={<Avatar src={contactDetail?.avatarUrl} size='large'/>}
                title={contactDetail?.name}
                description={
                  <Space>
                    <Space>
                      <UserOutlined/>
                      <Text>{contactDetail?.username}</Text>
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
                <ExpandOutlined key="openDetail" onClick={openContact}/>
                <Divider type='vertical'/>
                <EditOutlined key="edit" onClick={editContact}/>
                <Divider type='vertical'/>
                <DeleteOutlined key="delete" onClick={deleteContact}/>
              </Space>
            </Col>
          </Row>
        </Skeleton>
      </Card>
    </List.Item>
  )
}

export default ContactsListEntry
