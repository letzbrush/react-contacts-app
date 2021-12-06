import React, { MouseEventHandler, useCallback, useState } from 'react'
import { Form, Modal } from 'antd'

import { Contact } from '../types/Contact'
import { updateContactDetail } from '../store/contacts/effects'
import EditContactForm from './EditContactForm'

interface EditContactActionProps {
  contact?: Contact
  renderAction: (onClick: MouseEventHandler) => React.ReactNode
}

const EditContactAction = ({
  contact,
  renderAction,
}: EditContactActionProps) => {
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal: MouseEventHandler = useCallback(event => {
    event.stopPropagation()
    setIsModalVisible(true)
  }, [])

  const closeModal = useCallback(() => { setIsModalVisible(false) }, [])

  const submitEditedContact = useCallback(async () => {
    try {
      await form.validateFields()
      const updatedContact: Contact = {
        ...contact,
        ...form.getFieldsValue(),
      }
      await updateContactDetail(updatedContact)
      closeModal()
    } catch (e) {
      // validation or updating failed
    }
  }, [closeModal, contact, form])

  return (
    <span onClick={event => event.stopPropagation()}>
      { renderAction(openModal) }
      <Modal
        title="Edit Contact"
        visible={isModalVisible}
        okText='Save'
        okButtonProps={{ size: 'large' }}
        onOk={submitEditedContact}
        onCancel={closeModal}
        cancelText='Cancel'
        cancelButtonProps={{ type: 'link', size: 'large' }}
        destroyOnClose
      >
        <EditContactForm
          form={form}
          contact={contact}
        />
      </Modal>
    </span>
  )
}

export default EditContactAction
