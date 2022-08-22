import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'

export const DatePicker: React.FC<FormField> = () => {
  return <Form.Control type="date"></Form.Control>
}
