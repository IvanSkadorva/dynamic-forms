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
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <ButtonGroup className="my-2" onChange={handleChange}>
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <ToggleButton
          key={value}
          type={FieldType.RADIO}
          name="radioButton"
          value={value}
          checked={radioValue === radio.value}
          required={validation?.required}
        >
          {displayValue}
        </ToggleButton>
      ))}
      <Form.Control.Feedback type="invalid">
        You should choose something
      </Form.Control.Feedback>
    </ButtonGroup>
  )
}
