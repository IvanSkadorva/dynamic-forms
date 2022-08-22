import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'
import { DatePicker } from './DatePicker'
import { Input } from './Input'
import { Radio } from './Radio'

interface FieldProps {
  fieldConfig: FormField
}

export const Field: React.FC<FieldProps> = ({ fieldConfig }) => {
  let element = null
  let classes = ['field']
  let errorMessage = null
  if (fieldConfig.touched && !fieldConfig.valid) {
    classes.push('invalid')
  }

  switch (fieldConfig.type) {
    case FieldType.TEXT:
      return <Input {...fieldConfig} />
    case FieldType.EMAIL:
      return <Input {...fieldConfig} />
    case FieldType.RADIO:
      return <Radio {...fieldConfig} />
    case FieldType.DATE:
      return <DatePicker {...fieldConfig} />
    case FieldType.TELEPHONE:
      return <Input {...fieldConfig} />
    case FieldType.SWITCH:
      return <Input {...fieldConfig} />
  }

  return <div className="field-wrapper">{element}</div>
}

export default field
