import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import { FormCheckType } from 'react-bootstrap/esm/FormCheck'
import { FieldType } from '../models/enums/fieldType'

export const Switch: React.FC<FormField> = ({ id, label }) => (
  <Form.Check className="my-2" type={FieldType.RADIO} id={id} label={label} />
)
