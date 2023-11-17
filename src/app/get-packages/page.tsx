'use client'

import Address from '@/commons/Address'
import ButtomBottom from '@/commons/ButtomBottom'
import BoxTitle from '@/commons/BoxTitle'
import LemmonButton from '@/commons/LemmonButton'
import Header from '@/components/Header'
import React from 'react'
import { ChevronDownBig } from '@/commons/Icons'

export default function GetPackages() {
  return (
    <div className=" bg-lightGreen ">
      <Header />
      <div className="flex justify-center mb-4">
        <LemmonButton title={'obtener paquetes'} />
      </div>
      <div className="ml-8 mr-8 bg-lightGreen max-h-[450px] text-sm">
        <BoxTitle
          titleBox={'Cuántos paquetes repartirás hoy?'}
          titleBoxClasses={'ml-6'}
          boxClasses={'ml-2 mr-2'}
        />
        <Address />
        <Address />
        <Address />
        <Address />
        <Address />
        <Address />
        <Address />
        <Address />
        <div className="bg-white flex justify-center items-center rounded-b-[15px] h-[3rem]">
          <ChevronDownBig />
        </div>
      </div>
      <div className="bg-lightGreen">
        <ButtomBottom
          titleButtom={'iniciar jornada'}
          buttonClassName={'bg-darkGreen text-lemonGreen mb-6 mt-20'}
        />
      </div>
    </div>
  )
}
