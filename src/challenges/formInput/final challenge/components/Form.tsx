type FormProps = {
  id: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function Form({
  id,
  handleChange
}: FormProps) {
  return (
    <div className="">
      <label htmlFor={id + '-email'}>Email Address</label>
      <input
        className="email"
        type='text'
        name='email'
        id={id + '-email'}
        onChange={handleChange}
      />

      <label htmlFor={id + '-password'}>Password</label>
      <input
        className="password"
        type='password'
        name='password'
        id={id + '-password'}
        onChange={handleChange}
      />

      <label htmlFor={id + '-confirm-password'}>Confirm Password</label>
      <input
        className="confirm-password"
        type='password'
        name='confirmPassword'
        id={id + '-confirm-password'}
        onChange={handleChange}
      />
    </div>
  )
}
