import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Select: React.FC<FormField> = ({
  type,
  id,
  label,
  placeholder,
}) => {
  return (
    <Form>
      <div key={type} className="mb-3">
        <Form.Check type="checkbox" id={id} label={label} />

        <Form.Check
          disabled
          type={type}
          label={`disabled ${type}`}
          id={`disabled-default-${type}`}
        />
      </div>
    </Form>
  )
}
