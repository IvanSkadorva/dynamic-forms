import FormField from '../models/formField'

export const Input: React.FC<FormField> = ({ id, label }) => {
  return (
    <div className="form-group">
      <label htmlFor="id">{label}</label>
      <input {...props} />
    </div>
  )
}
