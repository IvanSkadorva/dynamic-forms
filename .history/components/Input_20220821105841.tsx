import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({
  type,
  id,
  label,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  )
}
