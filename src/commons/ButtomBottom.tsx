import React from 'react'
interface buttom {
  titleButtom?: string
  titleButtomClasses?: string
  buttonClassName?: string
}

export default function ButtomBottom({ titleButtom, titleButtomClasses, buttonClassName }: buttom) {
  return (
    <button
      className={`h-[30px] m-auto w-[270px] border border-solid border-darkGreen flex justify-center items-center rounded-[10px] ${buttonClassName}`}
    >
      <h2 className={`text-xs uppercase font-normal ${titleButtomClasses}`}>{titleButtom}</h2>
    </button>
  )
}
