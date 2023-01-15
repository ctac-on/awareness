import React, { HTMLInputTypeAttribute } from 'react'
import MaskedInput from 'react-maskedinput'

import './InputField.sass'

type InputFieldProps = {
  type: HTMLInputTypeAttribute
  required?: boolean
  id: string
  name: string
  children?: React.ReactNode
  value?: string
}

function InputField({
  type,
  required,
  id,
  name,
  children,
  value,
}: InputFieldProps) {
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
        />
      ) : (
        <input
          type={type}
          required={required}
          className='InputField__input'
          id={id}
          name={name}
          value={value}
        />
      )}
    </div>
  )
}

export default InputField
