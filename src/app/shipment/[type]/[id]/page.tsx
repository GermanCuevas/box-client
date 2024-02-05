'use client';
// import ButtonBottom from '@/commons/ButtonBottom';
import LemmonButton from '@/commons/LemmonButton';

// import { MapComponent } from '@/components/maps';
import { useAppSelector } from '@/store/hooks';
// import { usePackageInfoQuery } from '@/store/services/packageApi';
// import { PackageData } from '@/utils';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

interface ParamsObject {
  params: {
    id: string;
    type: string;
  };
}
// interface TextStatus {
//   textStatus: string;
// }
// interface StatusChanges {
//   'in course': TextStatus;
//   pending: TextStatus;
//   delivered: TextStatus;
// }

export default function Pending({ params }: ParamsObject) {
  const { id, type } = params;
  // const [userData, setUserdata] = useState<PackageData>();
  const router = useRouter();
  const { userInfo } = useAppSelector((store) => store.user);
  // const { data: packageInfo, isSuccess } = usePackageInfoQuery({ packageId: id || '' });

  const statusChanges: any = {
    'in course': { textStatus: 'en curso' },
    pending: { textStatus: 'pendiente' },
    delivered: { textStatus: 'entregado' }
  };

  console.log(userInfo);

  // const fetchAdress = async () => {
  //   const adress = `${packageInfo?.address} ${packageInfo?.addressNumber} ${packageInfo?.city} ${packageInfo?.postalCode}`;
  //   const coordinates = await axios.get(
  //     `https://api.opencagedata.com/geocode/v1/json?key=fa02162234354fcaab9d370c6ca65f8e&q=${adress}&pretty=1&no_annotations=1`
  //   );
  //   const response = coordinates.data.results[0].geometry;
  //   console.log(response);
  //   console.log(coordinates);
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     // fetchAdress();
  //   }
  // }, [id, type, isSuccess]);

  console.log(id);
  console.log(type);

  const hanleNavigateToPackagesInCourses = () => {
    router.push('/');
  };

  return (
    <section className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-50px)] py-4 ">
      <div className={'w-full max-w-[300px]'}>
        <div className="mb-3 mt-[.4rem]  tracking-normal w-full">
          <LemmonButton
            hanleLemmonButton={hanleNavigateToPackagesInCourses}
            title={`Reparto ${statusChanges[type.replace(/%20/g, ' ')]?.textStatus}`}
            width={'w-full'}
          />
        </div>

        {/* <div className="w-full">
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
        </div> */}
      </div>
    </section>
  );
}
