import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useState } from 'react'

export const RadioGroup: React.FC<FormField> = ({ label, options }) => {
  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Form.Check
          type="radio"
          key={value}
          label={displayValue}
          name="radioButton"
        />
      ))}
    </Form.Group>
  )
}
