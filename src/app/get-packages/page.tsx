'use client';

import Address from '@/commons/Address';
import ButtonBottom from '@/commons/ButtonBottom';
import BoxTitle from '@/commons/BoxTitle';
import LemmonButton from '@/commons/LemmonButton';
import React from 'react';
import { ChevronDownBig } from '@/commons/icons/ChevronDownBig';

export default function GetPackages() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5 min-h-[calc(100vh-70px)]">
      <div className="w-full max-w-[300px]">
        <div className="mb-3 tracking-normal">
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
        <div className="w-[300px] h-[353.6px] overflow-y-scroll">
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
          <Address />
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
      <div className="bg-lightGreen flex flex-col gap-y-3 mt-5 mb-8">
        <ButtonBottom
          titleButton={'iniciar jornada'}
          buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
        />
      </div>
    </div>
  );
}
