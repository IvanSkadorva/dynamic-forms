import { copyFile } from 'fs/promises'
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

  const getDisablingRules = (): Map<string, string> => {
    const map = new Map()
    fields.forEach(({ id, validation }, i) => {
      if (validation?.disablesIfTrue) {
        map.set(id, validation?.disablesIfTrue)
      }
    })
    return map
  }

  const disablingFields = getDisablingRules()

  const handleSubmit = (event) => {
    const form = event.currentTarget

    let submittedFormData = new Map()
    let unchekcedRadioOptionsRange = 0

    event.preventDefault()
    event.stopPropagation()

    fields.forEach(({ id }, i) => {
      if (form[i].type === FieldType.RADIO && !form[i].checked) {
        ++unchekcedRadioOptionsRange
      }
      submittedFormData.set(id, form[i + unchekcedRadioOptionsRange].value)
    })
    setFormData(submittedFormData)

    // OPEN THE CONSOLE TO FIND THE RESULT
    console.log(formData)

    setValidated(true)
  }

  const handleChange = ({ currentTarget }) => {
    const form = currentTarget

    console.log('hhiiii', disablingFields, form)

    for (const [key, value] of disablingFields) {
      console.log(form[key].value)
      form[key].value === true
        ? form[value].setAttribute('disabled', true)
        : (form[value].disabled = false)
    }
  }

  return (
    <div className="container w-50 py-4">
      <h1 className="h1 text-center mb-2">DYNAMIC FORM</h1>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        onChange={handleChange}
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
