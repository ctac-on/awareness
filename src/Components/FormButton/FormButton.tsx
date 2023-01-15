import React from 'react'

import './FormButton.sass'

type FormButtonProps = {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

function FormButton({ children, onClick, disabled }: FormButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className='o-button-fullColor FormButton'
    >
      {children}
    </button>
  )
}

export default FormButton
