'use client';

import { ChevronDownBig } from '@/commons/Icons';
import BoxTitle2 from '@/commons/BoxTitle';

import LemmonButton from '@/commons/LemmonButton';
import DeliveryDetails from '@/commons/DeliveryDetails';

import Image from 'next/image';
import LogoutButton from '@/commons/LogoutButton';

export default function Deliveries() {
  interface FeikData {
    name: string;
    percentage: number;
    status: 'delivered' | 'disabled' | 'in course';
  }
  const feikData: FeikData[] = [
    {
      name: 'Ivan',
      percentage: 29,
      status: 'delivered'
    },
    {
      name: 'Florencia',
      percentage: 39,
      status: 'disabled'
    },
    {
      name: 'Victoria',
      percentage: 45,
      status: 'in course'
    },
    {
      name: 'Nico',
      percentage: 1,
      status: 'disabled'
    }
  ];

  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 px-7">
      <div className={'w-full max-w-[300px]'}>
        <div className="mb-[1.45rem]">
          <header className=" w-full flex justify-between items-center">
            <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
            <LogoutButton text={'CERRAR SESIÓN'} classNameButton={'py-0.5 px-2.5'} />
          </header>
        </div>
        <div className="mb-3 mt-4 tracking-normal w-full">
          <LemmonButton title="repartidores" width={'w-full'} />
        </div>

        <div className="w-full h-[490px]">
          <BoxTitle2
            titleBox={'ENERO'}
            dateBox="mie/03"
            titleBoxClasses="font-bold"
            dateBoxClasses="font-bold"
            boxClasses={'justify-between h-[2.4rem] mx-5'}
          />
          <div className="bg-white rounded-b-[13px] px-[.56rem] ">
            {feikData.map((idem, i) => {
              return (
                <DeliveryDetails
                  key={i}
                  name={idem.name}
                  percentage={idem.percentage}
                  status={idem.status}
                />
              );
            })}
            <div className="flex items-center justify-center h-[3rem]">
              <ChevronDownBig />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
