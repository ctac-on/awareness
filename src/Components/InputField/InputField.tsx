import React, { HTMLInputTypeAttribute } from 'react'
import MaskedInput from 'react-maskedinput'

import './InputField.sass'

type InputFieldProps = {
  type: HTMLInputTypeAttribute
  required?: boolean
  id: string
  name?: string
  children?: React.ReactNode
  value?: string
  onChange?: (value: string) => void
}

function InputField({
  type,
  required,
  id,
  name,
  children,
  value,
  onChange,
}: InputFieldProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className='InputField'>
      <label className='InputField__label' htmlFor={id}>
        {children}
      </label>
      {type === 'tel' ? (
        <MaskedInput
          id={id}
          mask='+7 (111) 111-11-11'
          name={name}
          type='tel'
          className='InputField__input'
          required={required}
          value={value}
          onChange={handleChangeInput}
        />
      ) : (
        <input
          type={type}
          required={required}
          className='InputField__input'
          id={id}
          name={name}
          value={value}
          onChange={handleChangeInput}
        />
      )}
    </div>
  )
}

export default InputField
