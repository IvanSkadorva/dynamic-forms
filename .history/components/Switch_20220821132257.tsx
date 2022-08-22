import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Switch: React.FC<FormField> = ({ id, label }) => {
  return <Form.Check type="switch" id={id} label={label} />
}
