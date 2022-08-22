import { imageOptimizer } from 'next/dist/server/image-optimizer'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'
import { Field } from './Field'

interface FormGeneratorProps {
  fields: FormField[]
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ fields }) => {
  const [validated, setValidated] = useState(false)

  const setInitalFormDataState = (): object => {
    const intialFormData = new Map()
    fields.forEach(({ id }) => {
      intialFormData.set(id, '')
    })
    return intialFormData
  }
  const [formData, setFormData] = useState(setInitalFormDataState)

  const handleSubmit = (event: any) => {
    console.log(formData, fields)
    const form = event.currentTarget
    const intialFormData = new Map()
    for (let i = 0; i < fields.length; i++) {
      if (form[i].type !== FieldType.RADIO || form[i].checked) {
        intialFormData.set(id, form[i].value)
      }
    }
    console.log(intialFormData)
    setFormData({})

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className="container w-50 py-4">
      <h1 className="h1 text-center mb-2">DYNAMIC FORM</h1>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        noValidate
        className="d-flex flex-column"
      >
        {fields?.map((field) => (
          <Field key={field.id} fieldConfig={field} />
        ))}
        <Button type="submit" className="w-25 mt-4">
          Submit form
        </Button>
      </Form>
    </div>
  )
}
