import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const Switch: React.FC<FormField> = ({ id, label }) => {
  return <Form.Check className="my-3" type="switch" id={id} label={label} />
}
