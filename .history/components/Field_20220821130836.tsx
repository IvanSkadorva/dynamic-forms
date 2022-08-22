import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'
import { DatePicker } from './DatePicker'
import { Input } from './Input'
import { Radio } from './Radio'
import { Switch } from './Switch'

interface FieldProps {
  fieldConfig: FormField
}

export const Field: React.FC<FieldProps> = ({ fieldConfig }) => {
  switch (fieldConfig.type) {
    case FieldType.TEXT:
      return <Input {...fieldConfig} />
    case FieldType.EMAIL:
      return <Input {...fieldConfig} />
  }
}
