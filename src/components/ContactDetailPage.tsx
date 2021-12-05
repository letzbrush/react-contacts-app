import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Layout from './Layout'
import { useContactDetail } from '../store/storeFacade'
import { fetchContactDetail } from '../store/contacts/effects'
import ContactDetailCard from './ContactDetailCard'

interface ContactDetailPageParams {
  id: string
}

const ContactDetailPage = () => {
  const { id } = useParams<ContactDetailPageParams>()
  const idNumber = useMemo(() => parseInt(id), [id])
  const contactDetail = useContactDetail(idNumber)

  useEffect(() => {
    fetchContactDetail(idNumber)
  }, [idNumber])

  return (
    <Layout>
      <Layout.Header/>
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