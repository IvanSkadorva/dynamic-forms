import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Switch: React.FC<FormField> = ({ type, id, label }) => {
  return (
    <Form>
      <Form.Check type="switch" id={id} label={label} />
    </Form>
  )
}
