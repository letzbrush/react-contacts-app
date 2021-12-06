import React, { MouseEventHandler, useCallback, useState } from 'react'
import { Modal } from 'antd'

import { Contact } from '../types/Contact'
import { deleteContactDetail } from '../store/contacts/effects'

interface DeleteContactActionProps {
  contact?: Contact
  onContactDeleted?: (contact: Contact) => void
  renderAction: (onClick: MouseEventHandler) => React.ReactNode
}

const DeleteContactAction = ({
  contact,
  onContactDeleted,
  renderAction,
}: DeleteContactActionProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal: MouseEventHandler = useCallback(event => {
    event.stopPropagation()
    setIsModalVisible(true)
  }, [])

  const closeModal = useCallback(() => { setIsModalVisible(false) }, [])

  const deleteContactEntry = useCallback(async () => {
    if (contact) {
      await deleteContactDetail(contact.id)
      closeModal()
      if (onContactDeleted) {
        await onContactDeleted(contact)
      }
    }
  }, [closeModal, contact, onContactDeleted])

  return (
    <span onClick={event => event.stopPropagation()}>
      { renderAction(openModal) }
      <Modal
        title="Delete Contact"
        visible={isModalVisible}
        onOk={deleteContactEntry}
        okText='Yes'
        okButtonProps={{ danger: true, size: 'large' }}
        onCancel={closeModal}
        cancelText='No'
        cancelButtonProps={{ type: 'link', size: 'large' }}
      >
        Do you really want to delete {contact?.name}?
      </Modal>
    </span>
  )
}

export default DeleteContactAction
