import { Form } from 'react-bootstrap'
import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({
  type,
  label,
  placeholder,
  validation,
}) => {
  const { required } = validation
  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required={validation?.required}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      {validation?.required && (
        <Form.Control.Feedback type="invalid">
          This field is required
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
