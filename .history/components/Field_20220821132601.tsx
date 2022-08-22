import { FieldType } from '../models/enums/fieldType'
import FormField from '../models/formField'
import { Input } from './Input'
import { RadioGroup } from './RadioGroup'
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
    case FieldType.RADIO:
      return <RadioGroup {...fieldConfig} />
    case FieldType.DATE:
      return <Input {...fieldConfig} />
    case FieldType.TELEPHONE:
      return <Input {...fieldConfig} />
    case FieldType.SWITCH:
      return <Switch {...fieldConfig} />
  }
}
