import { Form } from 'react-bootstrap'
import { PHONE_NUMBER_VALIDATOR } from '../constants/phoneNumberValidator'
import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({
  id,
  type,
  label,
  placeholder,
  validation,
}) => {
  const required = validation?.required
  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        id={id}
        required={required}
        pattern={type === FieldType.PHONE ? PHONE_NUMBER_VALIDATOR : undefined}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      {required && (
        <Form.Control.Feedback type="invalid">
          This field is required
        </Form.Control.Feedback>
      )}
      {type === FieldType.PHONE && (
        <Form.Control.Feedback type="invalid">
          Invalid phone number
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
