import FormField from "../models/formField";



export const Select: React.FC<FormField> = ({type, id, label, placeholder}) => {
  return (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select className=”form-control”>
<option>Default select</option>
</select>
  </div>
  );
}