'use client';
import React, { useState } from 'react';
//icon
import { ChevronDownSmall } from '@/commons/icons/ChevronDownSmall';
//commons
import LemmonButton from '@/commons/LemmonButton';
import PackageDetailsList from '@/commons/PackageDetailsList';
import { Package } from '@/commons/interfaces/PackagesInterface';
// import Link from 'next/link';

// interface Data {
//   deliveryCode?: string;
//   address?: string;
//   city?: string;
//   status?: 'in course' | 'pending' | 'delivered';
//   _id?: string;
// }

interface deliveries {
  lemmonTitle?: string;
  data?: Package[];
  deliveryType?: string;
  roundedClass?: string;
}

export default function Deliveries({
  lemmonTitle = 'repartos pendientes',
  data,
  deliveryType,
  roundedClass = 'rounded-[15px]'
}: deliveries) {
  const [toggleList, setToggleList] = useState(false);

  const useHandleLemmonToggle = () => {
    setToggleList((prev) => !prev);
  };

  // console.log('ver esta data', data);
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

        {data?.map(
          ({ deliveryCode, city, status, address, _id }: Package, index: number, array) => (
            <React.Fragment key={index}>
              {/* <Link href={`/shipment/${deliveryType}/${_id}`} className="w-full"> */}
              <PackageDetailsList
                status={status}
                location={city}
                direction={address}
                deliveryCode={deliveryCode}
                _id={_id}
                type={deliveryType}
              />
              {/* </Link> */}
              {/* <PackageDetailsList
                status={status}
                city={city}
                address={address}
                deliveryCode={deliveryCode}
                _id={_id}
                type={deliveryType}
              /> */}
              {index !== array.length - 1 && (
                <li
                  key={`separator-${index}`}
                  className={'w-[275px] border-b-[.1px] border-b-darkGreen '}
                />
              )}
            </React.Fragment>
          )
        )}
      </ul>
    </section>
  );
}
