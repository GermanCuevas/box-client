interface input {
  placeholder?: string
  type?: string
  eye?: boolean
}

export default function Input({}: input) {
  return (
    <div className="border-b-2 border-red-600">
      {/* <input className="outline-none w-full border-b-[10px] border-red-500" type={type} placeholder={placeholder} /> */}
    </div>
  )
}
