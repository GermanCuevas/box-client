'use client';

import Address from '@/commons/Address';
import ButtomBottom from '@/commons/ButtomBottom';
import BoxTitle from '@/commons/BoxTitle';
import LemmonButton from '@/commons/LemmonButton';
import Header from '@/components/Header';
import React from 'react';
import { ChevronDownBig } from '@/commons/Icons';
import { roboto } from '../../../public/fonts/fonts';

export default function GetPackages() {
  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center py-4 h-screen">
      <Header />
      <div className={`w-full max-w-[300px] ${roboto.className}`}>
        <div className="mb-3 mt-6  tracking-normal">
          <LemmonButton title={'obtener paquetes'} width={'w-full'} />
        </div>
      </div>
      <div className="px-3 max-w-[300px] bg-lightGreen text-xs flex flex-col justify-center items-center">
        <div className="w-[300px] max-h-[35px]">
          <BoxTitle
            titleBox={'¿Cuántos paquetes repartirás hoy?'}
            titleBoxClasses={'text-center mb-5'}
            boxClasses={'justify-center h-10'}
          />
        </div>
        <div className="w-[300px]">
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
        </div>
        <div className="bg-white flex justify-center items-center rounded-b-[15px] h-[3rem] w-[300px]">
          <ChevronDownBig />
        </div>
      </div>
      <div className="bg-lightGreen flex flex-col gap-y-3 mt-4">
        <ButtomBottom
          titleButtom={'iniciar jornada'}
          buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
        />
      </div>
    </div>
  );
}
