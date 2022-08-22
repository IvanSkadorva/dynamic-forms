import { Form } from 'react-bootstrap'
import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({
  type,
  id,
  label,
  placeholder,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  )
}