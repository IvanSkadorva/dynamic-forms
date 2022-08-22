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
  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Form.Check
          type={FieldType.RADIO}
          name="radioButton"
          label={displayValue}
          value={value}
          key={value}
          required={validation?.required}
        ></Form.Check>
      ))}
    </Form.Group>
  )
}
