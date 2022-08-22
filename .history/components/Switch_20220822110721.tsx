import FormField from '../models/formField'
import Form from 'react-bootstrap/Form'
import { FieldType } from '../models/enums/fieldType'
import { MouseEventHandler } from 'react'

export const Switch: React.FC<FormField> = ({ id, label }) => {
  const handelClick = ({
    target,
  }: MouseEventHandler<HTMLInputElemen, MouseEvent>) => {
    target.value = target.checked
  }
  return (
    <Form.Check
      className="my-2"
      type={FieldType.SWITCH}
      id={id}
      label={label}
      onClick={handelClick}
    />
  )
}
