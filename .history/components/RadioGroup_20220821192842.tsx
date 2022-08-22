import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { useState } from 'react'

export const RadioGroup: React.FC<FormField> = ({ label, options }) => {
  const [value, setValue] = useState(2)
  const handleChange = (val) => setValue(val)

  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      {options?.map(({ displayValue, value }) => (
        <Form.Check type="radio" key={value} label={displayValue} />
      ))}
      <ToggleButtonGroup
        name="value"
        type="radio"
        value={value}
        onChange={handleChange}
      >
        <ToggleButton value={1}>foo</ToggleButton>
        <ToggleButton value={2}>bar</ToggleButton>
        <ToggleButton value={3}>baz</ToggleButton>
      </ToggleButtonGroup>
    </Form.Group>
  )
}
