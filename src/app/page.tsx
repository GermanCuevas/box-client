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
// import { Package } from '@/commons/interfaces/PackagesInterface';

export default function Home() {
  const { userInfo } = useAppSelector((store) => store.user);
  // const [packagesStatus, setPackagesStatus] = useState<Package[] | undefined>();
  const router = useRouter();
  const { data: packages } = usePackagePendingAndInCourseQuery({
    userId: userInfo?.id_user || ''
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
  }, [router, userInfo]);

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
          {/* <Deliveries
            lemmonTitle={'historial de repartos'}
            deliveryType={'history'}
            data={feikDataACE.fakeDataAll['history']}
          /> */}
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
