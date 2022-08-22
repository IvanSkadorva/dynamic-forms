import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Radio: React.FC<FormField> = ({ type, options }) => {
  return (
    <Form.Group>
      {options?.map(({ displayValue, value }) => (
        <div key={type} className="mb-3">
          <Form.Check type="radio" id={value} label={displayValue} />
        </div>
      ))}
    </Form.Group>
  )
}
