import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import FormField from '../models/formField'
import { Field } from './Field'

export const FormGenerator: React.FC<FormField[]> = (props) => {
  const [validated, setValidated] = useState(false)

  console.log('aoeuoeauuuuuuuu,', props)
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
    <Form>
      {props?.map((field) => (
        <Field key={field.id} fieldConfig={field} />
      ))}
      <Button type="submit">Submit form</Button>
    </Form>
  )
}
