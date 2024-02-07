'use client';
//router
import { useRouter } from 'next/navigation';
//redux
import { useAppSelector } from '@/store/hooks';

//commons
import ButtonBottom from '@/commons/ButtonBottom';
import Deliveries from '@/components/Deliveries';

// import { useEffect } from 'react';
//import { feikDataACE } from '@/utils';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { usePackagePendingAndInCourseQuery } from '@/store/services/packageApi';
//import { useGetProfileQuery } from '@/store/services/userApi';
//import { useDispatch } from 'react-redux';
// import { setUserInfo } from '@/store/slices/userSlice';
// import store from '@/store/store';
// import { setPackage } from '@/store/slices/packageSlice';
// import { Package } from '@/commons/interfaces/PackagesInterface';

export default function Home() {
  const { userInfo } = useAppSelector((store) => store.user);
  //const dispatch: any = useDispatch();
  // const [packagesStatus, setPackagesStatus] = useState<Package[] | undefined>();
  const router = useRouter();
  const { data: packages } = usePackagePendingAndInCourseQuery({
    userId: userInfo?.id_user || ''
  });
  //const { data } = useGetProfileQuery(null);
  const packageState = useAppSelector((store) => store.packages);

  // useEffect(() => {
  //   if (!userInfo) {
  //     //! SOLUCIONAR!!
  //     dispatch(setUserInfo(data));
  //     // router.push('/login');
  //   }
  // }, [data, router, userInfo]);

  useEffect(() => {
    console.log('cambiando estado');
  }, [packageState]);

  console.log(packages);
  console.log('PACKAGESTATE', packageState);

  console.log('UserInfo:', userInfo);
  // console.log('paquetess', packages);

  const handleButton = () => {
    router.push('/packages');
  };
  return (
    <main className=" h-[92.5vh] flex flex-col justify-between">
      <div className="h-[80%] mt-4 w-full flex flex-col justify-evenly">
        <div className="h-[40%] overflow-y-scroll">
          <Deliveries data={packages} deliveryType={'pending'} />
        </div>
        <div className="h-[50%] ">
          <Deliveries
            lemmonTitle={'historial de repartos'}
            deliveryType={'history'}
            // data={feikDataACE.fakeDataAll['history']}
          />
        </div>
      </div>
      <Link href={'/get-packages'}>
        <ButtonBottom
          handleButton={handleButton}
          buttonClassName={'bg-darkGreen w-[270px] mb-2'}
          titleButtonClasses={'text-lemonGreen'}
          titleButton="obtener paquetes"
        />
      </Link>
    </main>
  );
}
