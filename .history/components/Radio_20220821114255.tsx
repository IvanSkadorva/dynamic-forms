import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Select: React.FC<FormField> = ({ type, id, label, options }) => {
  return (
    <Form>
      {options?.map(({ displayValue, value }) => (
        <div key={type} className="mb-3">
          <Form.Check type="checkbox" id={value} label={displayValue} />
        </div>
      ))}
    </Form>
  )
}
