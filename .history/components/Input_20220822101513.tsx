import { Form } from 'react-bootstrap'
import { PHONE_NUMBER_VALIDATOR } from '../constants/phoneNumberValidator'
import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({
  type,
  label,
  placeholder,
  validation,
}) => {
  const required = validation?.required
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (type === FieldType.TELEPHONE) {
      console.log(
        'hello',
        target.value.match(PHONE_NUMBER_VALIDATOR),
        target.value,
      )
      target.value.match(PHONE_NUMBER_VALIDATOR) ??
        this.setCustomValidity('Invaild')
    }
  }
  return (
    <Form.Group className="my-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      {required && (
        <Form.Control.Feedback type="invalid">
          This field is required
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
