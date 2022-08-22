import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useState } from 'react'
import { FieldType } from '../models/enums/fieldType'

export const RadioGroup: React.FC<FormField> = ({
  label,
  options,
  validation,
}) => {
  const handleChange = ({ target }) => {
    !!target.checked ? (target.value = true) : (target.value = false)
  }

  return (
    <Form.Group className="my-2" onChange={handleChange}>
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Form.Check
          type={FieldType.RADIO}
          key={value}
          label={displayValue}
          required={validation?.required}
          name="radioButton"
        />
      ))}
      <Form.Control.Feedback type="invalid">
        You should choose something
      </Form.Control.Feedback>
    </Form.Group>
  )
}
