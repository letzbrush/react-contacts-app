import React from 'react'
import { Form, Input, InputNumber, FormInstance, Divider } from 'antd'

import { Contact } from '../types/Contact'

interface EditContactFormProps {
  form: FormInstance
  contact?: Contact
}

const requiredValidation = { required: true, message: 'This field is required' }

const EditContactForm = ({ form, contact }: EditContactFormProps) => {
  return (
    <Form
      form={form}
      initialValues={contact}
      labelCol={{
        xs: { span: 24 },
        sm: { span: 8 },
      }}
      wrapperCol={{
        xs: { span: 24 },
        sm: { span: 16 },
      }}
    >
      <Form.Item
        name='name'
        label='Name'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name='email'
        label='Email'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name='website'
        label='Website'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Divider/>
      <Form.Item
        name={['address', 'street']}
        label='Street'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['address', 'suite']}
        label='Suite'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['address', 'city']}
        label='City'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['address', 'zipcode']}
        label='Zipcode'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['address', 'geo']}
        label='Geo'
        rules={[requiredValidation]}
      >
        <Input.Group compact>
          <Form.Item
            name={['address', 'geo', 'lat']}
            rules={[requiredValidation]}
          >
            <InputNumber/>
          </Form.Item>
          <Form.Item
            name={['address', 'geo', 'lng']}
            rules={[requiredValidation]}
          >
            <InputNumber/>
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Divider/>
      <Form.Item
        name={['company', 'name']}
        label='Company Name'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['company', 'catchPhrase']}
        label='Catchphrase'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['company', 'bs']}
        label='BS'
        rules={[requiredValidation]}
      >
        <Input/>
      </Form.Item>
    </Form>
  )
}

export default EditContactForm
