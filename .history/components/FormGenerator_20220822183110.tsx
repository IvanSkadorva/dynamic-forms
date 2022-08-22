import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'
import { Field } from './elements/Field'

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

  const disablingRules = getDisablingRules()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()

    populateFormData(form)

    // OPEN THE CONSOLE TO FIND THE RESULT
    console.log(formData)

    setValidated(true)
  }

  const populateFormData = (form): void => {
    let submittedFormData = new Map()
    let unchekcedRadioOptionsRange = 0

    fields.forEach(({ id }, i) => {
      if (form[i].type === FieldType.RADIO && !form[i].checked) {
        ++unchekcedRadioOptionsRange
      }
      submittedFormData.set(id, form[i + unchekcedRadioOptionsRange].value)
    })
    setFormData(submittedFormData)
  }

  const handleChange = (event) => {
    const form = event.currentTarget
    disablingRules.forEach((value, key) => {
      form[key].value === 'true'
        ? form[value].setAttribute('disabled', true)
        : form[value].removeAttribute('disabled')
    })
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
