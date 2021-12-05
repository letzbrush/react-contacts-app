import React, { MouseEventHandler, useCallback } from 'react'
import { Skeleton, Card, Avatar, Button, Row, Col, Typography, Divider, List, Space } from 'antd'
import { MailOutlined, EditOutlined, DeleteOutlined, PhoneOutlined, GlobalOutlined, UserOutlined, HomeOutlined, ShopOutlined } from '@ant-design/icons';

import styles from './ContactDetailCard.module.less'
import { Contact } from '../types/Contact'

const { Title, Text, Link } = Typography

interface ContactDetailCardProps {
  contactDetail?: Contact
  isLoading: boolean
}

const ContactDetailCard = ({
  contactDetail,
  isLoading,
}: ContactDetailCardProps) => {
  const editContact: MouseEventHandler = useCallback(event => {
    console.log('editContact')
  }, [])

  const deleteContact: MouseEventHandler = useCallback(event => {
    console.log('deleteContact')
  }, [])

  return (
    <Card
      actions={[
        <Button key='edit' type='link' size='large' icon={<EditOutlined/>} onClick={editContact}>Edit</Button>,
        <Button key='delete' type='link' size='large' icon={<DeleteOutlined/>} onClick={deleteContact}>Delete</Button>,
      ]}
      className={styles.card}
    >
      <Skeleton
        loading={isLoading}
        paragraph={{ rows: 12 }}
        avatar
        active
      >
        <Row gutter={[32, 32]}>
          <Col flex='none'>
            <Avatar src={contactDetail?.avatarUrl} size={120}/>
          </Col>
          <Col flex='auto'>
            <Title level={2}>{contactDetail?.name}</Title>
            <List itemLayout="horizontal">
              <List.Item>
                <Space align='start'>
                  <HomeOutlined/>
                  <Space direction='vertical'>
                    <Text>{contactDetail?.address.street}</Text>
                    <Text>{contactDetail?.address.suite}</Text>
                    <Text>{contactDetail?.address.zipcode} {contactDetail?.address.city}</Text>
                    <Text>Geo: {contactDetail?.address.geo.lat}/{contactDetail?.address.geo.lng}</Text>
                  </Space>
                </Space>
              </List.Item>
              <List.Item>
                <Space align='start'>
                  <ShopOutlined/>
                  <Space direction='vertical'>
                    <Text>{contactDetail?.company.name}</Text>
                    <Text>{contactDetail?.company.bs}</Text>
                    <Text>{contactDetail?.company.catchPhrase}</Text>
                  </Space>
                </Space>
              </List.Item>
              <List.Item>
                <Space>
                  <PhoneOutlined/>
                  <Text>{contactDetail?.phone}</Text>
                </Space>
              </List.Item>
              <List.Item>
                <Space>
                  <UserOutlined/>
                  <Text>{contactDetail?.username}</Text>
                </Space>
              </List.Item>
              <List.Item>
                <Space>
                  <MailOutlined/>
                  <Link href={`mailto:${contactDetail?.email}`}>
                    {contactDetail?.email}
                  </Link>
                </Space>
              </List.Item>
              <List.Item>
                <Space>
                  <GlobalOutlined/>
                  <Link
                    href={`http://${contactDetail?.website}`}
                    target='_blank'
                  >
                    {contactDetail?.website}
                  </Link>
                </Space>
              </List.Item>
            </List>
          </Col>
        </Row>
      </Skeleton>
    </Card>
  )
}

export default ContactDetailCard
