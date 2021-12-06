import React, { useCallback, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'

import Layout from './Layout'
import { useContactDetail } from '../store/storeFacade'
import { fetchContactDetail } from '../store/contacts/effects'
import ContactDetailCard from './ContactDetailCard'
import { useHistory } from 'react-router'
import { appConfig } from '../appConfig'

interface ContactDetailPageParams {
  id: string
}

const ContactDetailPage = () => {
  const history = useHistory()
  const { id } = useParams<ContactDetailPageParams>()
  const idNumber = useMemo(() => parseInt(id), [id])
  const contactDetail = useContactDetail(idNumber)

  useEffect(() => {
    // todo: this condition can be removed if the delete & save endpoints actually work (unlike JsonPlaceholders)
    if (!contactDetail) {
      fetchContactDetail(idNumber)
    }
  }, [contactDetail, idNumber])

  const goBack = useCallback(() => {
    history.push(appConfig.navRoutes.contacts)
  }, [history])

  return (
    <Layout>
      <Layout.Header>
        <Button
          size='large'
          type='primary'
          icon={<ArrowLeftOutlined/>}
          onClick={goBack}
        />
      </Layout.Header>
      <Layout.Content>
        <ContactDetailCard
          contactDetail={contactDetail}
          isLoading={!contactDetail}
        />
      </Layout.Content>
      <Layout.Footer/>
    </Layout>
  )
}

export default ContactDetailPage
