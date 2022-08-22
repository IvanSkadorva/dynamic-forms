import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import FormField from '../models/formField'
import { Field } from './Field'

interface FormGeneratorProps {
  fields: FormField[]
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ fields }) => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event: {
    currentTarget: any
    preventDefault: () => void
    stopPropagation: () => void
  }) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className="container w-50 p-y-4">
      <Form className="d-flex flex-column">
        {fields?.map((field) => (
          <Field key={field.id} fieldConfig={field} />
        ))}
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  )
}