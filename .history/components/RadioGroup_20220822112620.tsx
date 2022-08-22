import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useState } from 'react'
import { FieldType } from '../models/enums/fieldType'
import { Button, ButtonGroup } from 'react-bootstrap'

export const RadioGroup: React.FC<FormField> = ({
  label,
  options,
  validation,
}) => {
  const handleChange = ({ target }) => {
    console.log(target.value)
    target.checked ? (target.value = true) : (target.value = false)
  }

  return (
    <Form.Group className="my-2" onChange={handleChange}>
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Form.Check
          name="radioButton"
          label={displayValue}
          required={validation?.required}
        ></Form.Check>
      ))}
      <Form.Control.Feedback type="invalid">
        You should choose something
      </Form.Control.Feedback>
    </Form.Group>
  )
}
