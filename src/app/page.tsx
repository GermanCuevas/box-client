'use client';
//router
import { useRouter } from 'next/navigation';
//redux
import { useAppSelector } from '@/store/hooks';

//commons
import ButtomBottom from '@/commons/ButtomBottom';
import Deliveries from '@/components/Deliveries';

import { useEffect } from 'react';
import { feikDataACE } from '@/utils';

/* const fakeDataPendings = [
  {
    packageID: '#0A235',
    direction: 'Amenabar 2356',
    location: 'CABA',
    status: 'in course'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'pending'
  }
];
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
  }
];
 */
export default function Home() {
  const userAuth = useAppSelector((store) => store.user.userAuth);

  const router = useRouter();

  useEffect(() => {
    if (!userAuth) {
      router.push('/login');
    }
  }, [router, userAuth]);

  const handleButton = () => {
    router.push('/packages');
  };
  return (
    <main className=" h-[92.5vh] flex flex-col justify-between">
      <div className="h-[80%] mt-4 w-full flex flex-col justify-evenly">
        <div className="h-[40%] ">
          <Deliveries data={feikDataACE.fakeDataAll['pending']} deliveryType={'pending'} />
        </div>
        <div className="h-[50%] ">
          <Deliveries
            lemmonTitle={'historial de repartos'}
            deliveryType={'history'}
            data={feikDataACE.fakeDataAll['history']}
          />
        </div>
      </div>
      <ButtomBottom
        handleButton={handleButton}
        buttonClassName={'bg-darkGreen w-[270px] mb-2'}
        titleButtomClasses={'text-lemonGreen'}
        titleButtom="obtener paquetes"
      />
    </main>
  );
}
