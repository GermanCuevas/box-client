import React from 'react'

interface LogoutButtonProps {
  classNameButton?: string
  text?: string
}

export default function LogoutButton({ text, classNameButton }: LogoutButtonProps) {
  return (
    <button
      className={`bg-lightGreen text-[12px] text-darkGreen rounded-xl uppercase border-darkGreen border-2 ${classNameButton}`}
    >
      {text}
    </button>
  )
}
