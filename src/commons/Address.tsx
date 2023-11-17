import React from 'react'
import { CheckOK, CheckOff } from './Icons'
interface address {
  status?: boolean
  onClickButton?(): void
}

export default function Address({ status, onClickButton }: address) {
  return (
    <div className="bg-white flex justify-start items-center border-b-[1px] border-darkGreen">
      <div
        className={
          'w-[30rem] h-[3.5rem] flex  items-center gap-x-4 ml-6 font-Roboto text-darkGreen'
        }
        onClick={() => onClickButton?.()}
      >
        {status ? (
          <CheckOK
            height="30px"
            width="30px"
            color="#24424D"
            classNameCheck="bg-[#CEF169] rounded-full"
          />
        ) : (
          <CheckOff classNameCheck="border-darkGreen border-[2px] w-[30px] h-[30px]" />
        )}
        <h2>Amenabar 2356, CABA</h2>
      </div>
    </div>
  )
}
