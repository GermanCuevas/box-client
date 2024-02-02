'use client';
import React from 'react';
//icons
import { ChevronDownSmall } from '@/commons/icons/ChevronDownSmall';
import { ChevronDownBig } from '@/commons/icons/ChevronDownBig';
//commons
import LemmonButton from '@/commons/LemmonButton';
import HelloAdmin from '@/commons/HelloAdmin';
//components
import Deliveries from '@/components/Deliveries';

// const fakeDataHistory = [
//   {
//     packageID: '#0G370',
//     direction: 'Heredia 785',
//     location: 'CABA',
//     status: 'delivered'
//   },
//   {
//     packageID: '#0G370',
//     direction: 'Heredia 785',
//     location: 'CABA',
//     status: 'delivered'
//   },
//   {
//     packageID: '#0G370',
//     direction: 'Heredia 785',
//     location: 'CABA',
//     status: 'delivered'
//   }
// ];

export default function ProfileAdmin() {
  return (
    <div className="flex flex-col items-center justify-center py-4 h-[92.5]">
      <div className="w-full max-w-[300px]">
        <div className="mb-2 tracking-normal">
          <LemmonButton title={'gestionar pedidos'} width={'w-full'} />
        </div>
        <div>
          <HelloAdmin />
        </div>
        <div className="mb-4 mt-2 tracking-normal text-sm">
          <LemmonButton
            title={'repartos pendientes'}
            width={'w-full'}
            icon={<ChevronDownSmall />}
            subtitle={'sin repartos'}
          />
        </div>
        <div className="px-3 max-w-[300px] max-h-[332px] bg-lightGreen text-xs flex flex-col justify-center items-center">
          <div className="w-[300px]">
            <Deliveries
              lemmonTitle={'historial de repartos'}
              // data={fakeDataHistory}
              deliveryType={'history'}
              roundedClass="rounded-t-[15px]"
            />
            <div className="bg-white flex justify-center items-center rounded-b-[15px] border-t-[0.5px] border-darkGreen h-[3rem] w-[300px]">
              <ChevronDownBig />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
