import React, { MouseEventHandler, useCallback } from 'react'
import { Skeleton, Card, Avatar } from 'antd'
import { EditOutlined, DeleteOutlined, ExpandOutlined } from '@ant-design/icons';

import { Contact } from '../types/Contact'
import { useHistory } from 'react-router'
import { appConfig } from '../appConfig'

const { Meta } = Card

interface ContactCardProps {
  contactDetail?: Contact
  isLoading: boolean
}

const ContactCard = ({
  contactDetail,
  isLoading,
}: ContactCardProps) => {
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
    <Card
      hoverable
      onClick={navigateToContactDetail}
      actions={[
        <ExpandOutlined key="openDetail" onClick={openContact}/>,
        <EditOutlined key="edit" onClick={editContact}/>,
        <DeleteOutlined key="delete" onClick={deleteContact}/>,
      ]}
    >
      <Skeleton
        loading={isLoading}
        paragraph={{ rows: 1 }}
        avatar
        active
      >
        <Meta
          avatar={<Avatar src={contactDetail?.avatarUrl} size='large'/>}
          title={contactDetail?.name}
          description={contactDetail?.phone}
        />
      </Skeleton>
    </Card>
  )
}

export default ContactCard
