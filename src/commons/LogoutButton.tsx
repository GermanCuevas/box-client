import React from 'react';

interface LogoutButtonProps {
  classNameButton?: string;
  text?: string;
}

export default function LogoutButton({ text, classNameButton }: LogoutButtonProps) {
  return (
    <button
      className={`bg-lightGreen text-sm text-darkGreen rounded-xl border-darkGreen border-2 ${classNameButton}`}
    >
      {text}
    </button>
  );
}
