import FormField from "../models/formField";
import Form from "react-bootstrap/Form";
import { FieldType } from "../models/enums/fieldType";

export const Switch: React.FC<FormField> = ({ id, label }) => {
  const handelClick = (e: React.MouseEventHandler<HTMLInputElement>) => {
    e.target.value = e.target.checked;
    console.log(e.target.value);
  };
  return (
  <Form.Check
    className="my-2"
    type={FieldType.SWITCH}
    id={id}
    label={label}
    onClick={handelClick}}
  />
)
  };
