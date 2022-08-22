import Option from './Option'
import ValidationRules from './validationRules'

export interface FormFiled {
  id: string
  type: string
  label: string
  placeholder: string
  options?: Option[]
  validation?: ValidationRules
  errorMessage: string
}
