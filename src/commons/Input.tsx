import { EyeClose, EyeOpen } from './Icons'

interface input {
  placeholder?: string
  type?: string
  eyeOn?: boolean
  inputClasses?: string
}

export default function Input({ placeholder, type, eyeOn, inputClasses }: input) {
  return (
    <>
      <div className="relative">
        <input
          className={`${inputClasses} outline-none w-full border-b-[0.5px] pb-0.5 text-sm`}
          type={type}
          placeholder={placeholder}
        />
        {eyeOn === false && (
          <div className="absolute top-1 right-[5px]">
            <EyeClose />
          </div>
        )}
        {eyeOn === true && (
          <div className="absolute top-1 right-[5px]">
            <EyeOpen />
          </div>
        )}
      </div>
    </>
  )
}
