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
  const [formData, setFormData] = useState(new Map())

  const handleSubmit = (event: any) => {
    const form = event.currentTarget
    const formData = new FormData(event.currentTarget.value)

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      let submittedFormData = new Map()
      console.log(form, form.elements, formData.entries)
      // form.elements.forEach(({ value }, i) => {
      //   console.log(form[i].value);

      //   submittedFormData.set(fields[i], value);
      // });
      setFormData(submittedFormData)
      console.log(formData)
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
