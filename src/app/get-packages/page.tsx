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
    <div className=" bg-lightGreen h-screen">
      <Header />
      <div className="flex justify-center mb-4">
        <LemmonButton title={'obtener paquetes'} />
      </div>
      <div className="ml-8 mr-8 bg-lightGreen text-xs flex flex-col justify-center items-center">
        <div className="w-[100%]">
          <BoxTitle
            titleBox={'¿Cuántos paquetes repartirás hoy?'}
            titleBoxClasses={'text-center'}
            boxClasses={'justify-center h-10'}
          />
        </div>
        <div className="w-[100%]">
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
        </div>
        <div className="bg-white flex justify-center items-center rounded-b-[15px] h-[3rem] w-[100%]">
          <ChevronDownBig />
        </div>
      </div>
      <div className="bg-lightGreen mt-4">
        <ButtomBottom
          titleButtom={'iniciar jornada'}
          buttonClassName={'bg-darkGreen text-lemonGreen'}
        />
      </div>
    </div>
  )
}
