/* eslint-disable */
'use client';
import { useState, ChangeEvent } from 'react';
import { EyeClose, EyeOpen } from './Icons';

interface input {
  placeholder?: string;
  type?: string;
  eyeOn?: boolean;
  inputClasses?: string;
  name?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  handleChange,
  placeholder,
  type = 'text',
  eyeOn,
  inputClasses,
  name
}: input) {
  const [isEyeClose, setIsEyeClose] = useState(eyeOn);

  function handleClickEye() {
    setIsEyeClose(!isEyeClose);
  }

  function changeType() {
    if (eyeOn === undefined) {
      return type;
    }
    if (isEyeClose) {
      return 'text';
    } else if (!isEyeClose) {
      return 'password';
    }
  }

  return (
    <>
      <div className="relative">
        <input
          className={`${inputClasses} outline-none w-full border-b-[0.5px] pb-0.5 text-sm`}
          type={changeType()}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
        {isEyeClose === false && (
          <div className="absolute top-1 right-[5px] cursor-pointer" onClick={handleClickEye}>
            <EyeClose />
          </div>
        )}
        {isEyeClose === true && (
          <div className="absolute top-1 right-[5px] cursor-pointer" onClick={handleClickEye}>
            <EyeOpen />
          </div>
        )}
      </div>
    </>
  );
}
