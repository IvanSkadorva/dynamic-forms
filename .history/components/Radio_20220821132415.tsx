import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Radio: React.FC<FormField> = ({ type, options }) => {
  return (
    <Form.Group>
      {options?.map(({ displayValue, value }) => (
        <Form.Check type="radio" key={value} label={displayValue} />
      ))}
    </Form.Group>
  )
}
