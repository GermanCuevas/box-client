'use client';
import ButtonBottom from '@/commons/ButtonBottom';
import LemmonButton from '@/commons/LemmonButton';

import { MapComponent } from '@/components/maps';
import { FakeDataAll, PackageData, feikDataACE } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ParamsObject {
  params: {
    id: string;
    type: string;
  };
}

export default function Pending({ params }: ParamsObject) {
  const { id, type } = params;
  const [userData, setUserdata] = useState<PackageData>();
  const router = useRouter();

  useEffect(() => {
    const dataBase = feikDataACE.fakeDataAll[type as keyof FakeDataAll];
    const search = dataBase.find((data) => data.id === id);
    setUserdata(search);
  }, [id, type]);

  const hanleNavigateToPackagesInCourses = () => {
    router.push('/');
  };

  return (
    <section className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-50px)] py-4 ">
      <div className={'w-full max-w-[300px]'}>
        <div className="mb-3 mt-[.4rem]  tracking-normal w-full">
          <LemmonButton
            hanleLemmonButton={hanleNavigateToPackagesInCourses}
            title="Reparto en curso"
            width={'w-full'}
          />
        </div>

        <div className="w-full">
          {userData && (
            <MapComponent
              destino={userData.direction}
              coordinates={userData.latlon}
              numPackage={userData.packageID}
              userInfo={userData.nombre}
            />
          )}
          <div className="flex flex-col gap-y-3 mt-8 px-2">
            <ButtonBottom
              titleButton="Finalizar"
              buttonClassName="uppercase bg-darkGreen w-[100%]"
              titleButtonClasses={'text-lightGreen'}
            />
            <ButtonBottom
              titleButton="Cancelar entrega"
              buttonClassName="uppercase w-[100%]"
              titleButtonClasses="text-darkGreen "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
