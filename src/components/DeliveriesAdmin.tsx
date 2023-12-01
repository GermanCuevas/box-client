'use client';
import React, { useState } from 'react';
//icon
import { ChevronDownSmall } from '@/commons/icons/ChevronDownSmall';
//commons
import LemmonButton from '@/commons/LemmonButton';
import DeliveryAvailability from '@/commons/DeliveryAvailability';

// interface data {
//   imgDeliveries?: string;
//   title?: 'Repartidores' | 'Paquetes';
//   percentage?: number;
//   enabledDeliveries?: number;
//   totalDeliveries?: number;
//   packagesDistributed?: number;
//   totalPackages?: number;
// }

interface deliveriesAdmin {
  lemmonTitle?: string;
  data?: Array<object>;
  deliveryType?: string;
  roundedClass?: string;
}

export default function DeliveriesAdmin({
  lemmonTitle = 'detalles',
  deliveryType,
  roundedClass = 'rounded-[15px]'
}: deliveriesAdmin) {
  const [toggleList, setToggleList] = useState(false);

  const useHandleLemmonToggle = () => {
    setToggleList((prev) => !prev);
  };

  return (
    <section
      className={`w-[300px] min-h-[100px] ${roundedClass} m-auto ${!toggleList ? 'bg-white' : ''}`}
    >
      <LemmonButton
        hanleLemmonButton={useHandleLemmonToggle}
        height={'h-[43px]'}
        title={lemmonTitle}
        icon={<ChevronDownSmall />}
      />

      <ul className={`w-full h-fit ${!toggleList ? 'flex' : 'hidden'}   flex-col  items-center`}>
        {deliveryType === 'history' && (
          <>
            <li className={'text-[12px] text-start w-full pl-5 font-[500] text-darkGreen'}>
              <p className="m-2">58 paquetes entregados</p>
            </li>
            <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '} />
          </>
        )}
        <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '}>
          <DeliveryAvailability title={'Repartidores'} enabledDeliveries={2} percentage={20} />
          <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '} />
          <DeliveryAvailability percentage={80} />
        </div>

        {/* {data?.map(
          ({ imgDeliveries,title, percentage, enabledDeliveries, totalDeliveries, packagesDistributed, totalPackages   id = '' }: data, index: number, array) => (
            <React.Fragment key={index}>
              <Link href={`/shipment/${deliveryType}/${id}`} className="w-full">
                <DeliveryAvailability
                  title={'Repartidores'}
                  enabledDeliveries={2}
                  percentage={20}
                />
              </Link>
              {index !== array.length - 1 && (
                <li
                  key={`separator-${index}`}
                  className={'w-[275px] border-b-[.1px] border-b-darkGreen '}
                />
              )}
            </React.Fragment>
          )
        )} */}
      </ul>
    </section>
  );
}
