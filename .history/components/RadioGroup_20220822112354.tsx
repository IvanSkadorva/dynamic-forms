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
    console.log(target)
    target.checked ? (target.value = true) : (target.value = false)
  }

  return (
    <ButtonGroup
      className="my-2"
      onChange={handleChange}
      required={validation?.required}
    >
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Button name="radioButton">{displayValue}</Button>
      ))}
      <Form.Control.Feedback type="invalid">
        You should choose something
      </Form.Control.Feedback>
    </ButtonGroup>
  )
}
