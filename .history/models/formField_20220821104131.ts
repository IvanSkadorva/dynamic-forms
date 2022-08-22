export interface FormFiled {
  id: string
  type: string
  label: string
  placeholder: string
  options: [
    {
      value: 'fixed'
      displayValue: 'Fixed Term'
    },
    {
      value: 'permanent'
      displayValue: 'Permanent'
    },
  ]
  value: ''
  validation: {
    required: true
  }
  valid: false
  errorMessage: 'Enter Valid data'
  touched: false
}
