import { FormDataType } from "../types"

type CheckboxProps = {
  id: string
  formData: FormDataType
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function Checkbox({
  id,
  formData,
  handleChange,
}: CheckboxProps) {
  return (
    <div className="flex h-10 items-center">
      <input
        className="mr-1 "
        type="checkbox" 
        name="isJoined" 
        id={id + '-isJoin'}
        onChange={handleChange}
        checked={formData.isJoined} 
      />
      <label htmlFor={id + '-isJoin'}>I want to join the newsletter</label>
    </div>
  )
}
