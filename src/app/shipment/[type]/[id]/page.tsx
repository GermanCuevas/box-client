'use client';
import ButtonBottom from '@/commons/ButtonBottom';
import LemmonButton from '@/commons/LemmonButton';

import { MapComponent } from '@/components/maps';
import { useAppSelector } from '@/store/hooks';
import {
  usePackageInfoQuery,
  // usePutCancelAssignedPackageMutation,
  usePutPackageInDeliveredMutation
} from '@/store/services/packageApi';
import toastAlert from '@/utils/toastifyAlert';
// import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const router = useRouter();
  const { userInfo } = useAppSelector((store) => store.user);
  const { data: packageInfo } = usePackageInfoQuery({ packageId: id || '' });
  const [putPackageInDelivered] = usePutPackageInDeliveredMutation();
  // const [cancelAssignedPackage] = usePutCancelAssignedPackageMutation();
  const [packageInfoUser, setPackageInfoUser] = useState({});
  const [coordinates, setCordinates] = useState(null);
  const [packageState, setPackageState] = useState(status);

  const statusChanges: any = {
    'in course': { textStatus: 'en curso' },
    pending: { textStatus: 'pendiente' },
    delivered: { textStatus: 'entregado' }
  };

  console.log(packageState);
  console.log(setCordinates);
  console.log(setPackageInfoUser);
  console.log(userInfo);
  console.log(packageInfo);
  console.log(packageInfoUser);

  // const fetchAdress = async () => {
  //   const adress = `${packageInfo?.address} ${packageInfo?.addressNumber} ${packageInfo?.city} ${packageInfo?.postalCode}`;
  //   const coordinates = await axios.get(
  //     `https://api.opencagedata.com/geocode/v1/json?key=fa02162234354fcaab9d370c6ca65f8e&q=${adress}&pretty=1&no_annotations=1`
  //   );
  //   const response = coordinates.data.results[0].geometry;
  //   setCordinates(response);
  //   console.log(response);
  //   console.log(coordinates);
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setPackageInfoUser(packageInfoUser);
  //     fetchAdress();
  //   }
  // }, [id, type, isSuccess]);

  const hanleNavigateToPackagesInCourses = () => {
    router.push('/');
  };

  const handleFinishClick = async () => {
    try {
      await putPackageInDelivered({ packageId: id, userId: userInfo?.id_user }).unwrap();
      setPackageState('delivered');
      router.push('/');
      console.log('ESTAAA ENTRANDO ACA');
    } catch (error: any) {
      if (error.data.message === 'Error para finalizar la entrega del paquete') {
        toastAlert('error', 'Error para finalizar la entrega del paquete!');
      } else {
        console.error(error);
      }
    }
  };

  // const handleCancelClick = async () => {
  //   try {
  //     await cancelAssignedPackage({ packageId: id, userId: userInfo?.id_user }).unwrap();
  //     setPackageState('pending');
  //     router.push('/');
  //     console.log('ESTAAA ENTRANDO ACA');
  //   } catch (error: any) {
  //     if (error.data.message === 'Error para cancelar el paquete') {
  //       toastAlert('error', 'Error para cancelar el paquete!');
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // };

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

        <div className="w-full">
          {packageInfo && coordinates && (
            <MapComponent
              destino={packageInfo.address}
              coordinates={coordinates}
              numPackage={packageInfo.deliveryCode}
              userInfo={packageInfo.receptorName}
            />
          )}
          <div className="flex flex-col gap-y-3 mt-8 px-2">
            <ButtonBottom
              handleButton={handleFinishClick}
              titleButton="Finalizar"
              buttonClassName="uppercase bg-darkGreen w-[100%]"
              titleButtonClasses={'text-lightGreen'}
            />
            <ButtonBottom
              // handleButton={handleCancelClick}
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
