import { FieldType } from './enums/fieldType'
import Option from './option'
import ValidationRules from './validationRules'

export default interface FormField {
  id: string
  type: FieldType
  label: string
  placeholder?: string
  options?: Option[]
  validation?: ValidationRules
}
