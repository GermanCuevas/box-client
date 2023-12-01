'use client';
import React from 'react';
//commons
import LemmonButton from '@/commons/LemmonButton';
import HelloAdmin from '@/commons/HelloAdmin';
//components
import DateDetail from '@/commons/DateDetail';
import ButtonBottom from '@/commons/ButtonBottom';
//icons
import { Plus } from '@/commons/icons/Plus';

export default function AdminHome() {
  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center py-4 h-screen">
      <div className="w-full max-w-[300px]">
        <div className="text-center mb-2 mt-6  tracking-normal">
          <LemmonButton title={'gestionar pedidos'} width={'w-full'} icon={''} />
        </div>
        <div>
          <HelloAdmin
            name={'¡Hola Admin!'}
            editMode={false}
            subTitle={'Estos son los pedidos del día'}
          />
        </div>
        <div className="mb-4 mt-2 tracking-normal text-sm">
          <DateDetail />
        </div>
        <div className="px-3 max-w-[300px] max-h-[332px] bg-lightGreen text-xs flex flex-col justify-center items-center">
          <div className="w-[300px]">
            {/* common de ivan */}
            <div className="bg-lightGreen gap-y-3 mt-[10px] relative">
              <ButtonBottom
                titleButton={'nuevo paquete'}
                icon={<Plus />}
                buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
