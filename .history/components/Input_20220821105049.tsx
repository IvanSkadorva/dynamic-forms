import FormField from '../models/formField'

export const Input: React.FC<FormField> = (props) => {
  const { label, id } = props
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </div>
  )
}
