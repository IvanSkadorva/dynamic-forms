export interface FormFiled {
  id: 'employmentPeriod'
  type: 'select'
  placeholder: 'Choose Employment Period'
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
