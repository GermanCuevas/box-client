'use client';
import React from 'react';
//router
import { useRouter } from 'next/navigation';
//commons
import BoxTitle from '@/commons/BoxTitle';
import PackageDetailsList from '@/commons/PackageDetailsList';
import LemmonButton from '@/commons/LemmonButton';
//components
import Header from '@/components/Header';
//icons
import { ChevronDownBig } from '@/commons/Icons';

const fakeDataHistory = [
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  }
];

interface dataProps {
  packageID?: string;
  direction?: string;
  location?: string;
  status: 'in course' | 'pending' | 'delivered';
}

interface packageProps {}

export default function Package({}: packageProps) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <section className="bg-lightGreen h-[100vh] flex flex-col justify-between pt-5">
      <Header />
      <div className={'h-[90%] flex flex-col items-center w-full'}>
        <LemmonButton hanleLemmonButton={handleRedirect} title="paquetes" />

        <article
          className={
            'w-[300px] mt-2 h-[490px] flex flex-col justify-between bg-white rounded-[15px] '
          }
        >
          <BoxTitle
            titleBox={'Enero'}
            titleBoxClasses={'uppercase font-bold '}
            boxClasses={'justify-between h-[35px] px-5 h-10 text-[14px]'}
            dateBoxClasses={'font-[400]'}
            dateBox="mie / 03"
          />

          <ul className={'w-full h-fit flex  flex-col  items-center'}>
            {
              <>
                <li className={'text-[12px] text-start w-full pl-5 font-[500] text-darkGreen'}>
                  <p>58 paquetes entregados</p>
                </li>
                <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '} />
              </>
            }
            {fakeDataHistory?.map(
              ({ packageID, location, status, direction }: dataProps, index: number, array) => {
                const lastElement = index === array.length - 1;

                return (
                  <>
                    <PackageDetailsList
                      status={status}
                      location={location}
                      direction={direction}
                      packageID={packageID}
                    />
                    {!lastElement && (
                      <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '} />
                    )}
                  </>
                );
              }
            )}
          </ul>
          <div className="bg-white flex border-t border-t-darkGreen justify-center items-center rounded-b-[15px] h-[3rem] w-full">
            <ChevronDownBig />
          </div>
        </article>
      </div>
    </section>
  );
}