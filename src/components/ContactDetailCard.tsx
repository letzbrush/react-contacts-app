import React from 'react'
import { Skeleton, Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { Contact } from '../types/Contact'

const { Meta } = Card

interface ContactDetailCardProps {
  contactDetail: Contact
  isLoading: boolean
}

const ContactDetailCard = ({ contactDetail, isLoading }: ContactDetailCardProps) => {
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={isLoading} avatar active>
        <Meta
          avatar={<Avatar src={contactDetail?.avatarUrl} />}
          title={contactDetail?.name}
          description={contactDetail?.phone}
        />
      </Skeleton>
    </Card>
  )
}

export default ContactDetailCard
