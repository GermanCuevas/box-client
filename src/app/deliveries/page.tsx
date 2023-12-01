'use client';

import { ChevronDownBig } from '@/commons/icons/ChevronDownBig';
import BoxTitle2 from '@/commons/BoxTitle';

import LemmonButton from '@/commons/LemmonButton';
import DeliveryDetails from '@/commons/DeliveryDetails';
import Link from 'next/link';

export default function Deliveries() {
  interface FeikData {
    name: string;
    percentage: number;
    status: 'delivered' | 'disabled' | 'in course';
  }
  const feikData: FeikData[] = [
    {
      name: 'Victoria',
      percentage: 45,
      status: 'in course'
    },
    {
      name: 'Florencia',
      percentage: 39,
      status: 'disabled'
    },
    {
      name: 'Ivan',
      percentage: 29,
      status: 'delivered'
    },
    {
      name: 'Nico',
      percentage: 1,
      status: 'disabled'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-4 px-7">
      <div className={'w-full max-w-[300px]'}>
        <div className="mb-3 mt-3 tracking-normal w-full">
          <LemmonButton title="repartidores" width={'w-full'} />
        </div>
        <div className="w-full h-[490px]">
          <BoxTitle2
            titleBox={'ENERO'}
            dateBox="mie/03"
            titleBoxClasses="font-bold"
            dateBoxClasses="font-bold"
            boxClasses={'justify-between h-[35px] mx-5'}
          />
          <div className="bg-white rounded-b-[13px] px-[.56rem] ">
            {feikData.map((idem, i) => {
              return (
                <Link key={i} href={'/profile-admin'}>
                  <DeliveryDetails
                    name={idem.name}
                    percentage={idem.percentage}
                    status={idem.status}
                  />
                </Link>
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
