'client'

import ButtomBottom from '@/commons/ButtomBottom'
import LemmonButton from '@/commons/LemmonButton'
import React from 'react'

export default function GetPackages() {
  return (
    <div className=" bg-lightGreen ">
      <div className="flex justify-center">
        <LemmonButton />
      </div>

      <ButtomBottom
        titleButtom={'INICIAR JORNADA'}
        buttonClassName={'bg-darkGreen text-lemonGreen'}
      />
    </div>
  )
}
