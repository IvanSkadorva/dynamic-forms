interface NumberInputProps {
  type: 'number'
  value: number
  min?: number
  max?: number
}

interface TextInputProps {
  type?: 'text'
  value: string
}

interface CheckboxInputProps {
  type: 'checkbox'
  checked?: boolean
}

type InputProps = NumberInputProps | TextInputProps | CheckboxInputProps

export const Input: React.FC<InputProps> = (props) => <input {...props} />
