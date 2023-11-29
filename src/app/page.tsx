'use client';
//router
import { useRouter } from 'next/navigation';
//redux
import { useAppSelector } from '@/store/hooks';

//commons
import ButtomBottom from '@/commons/ButtomBottom';
import Deliveries from '@/components/Deliveries';

import { useEffect } from 'react';

const fakeDataPendings = [
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
    <main className=" h-[100vh] flex flex-col justify-between">
      <div className="h-[80%] mt-4 w-full flex flex-col justify-evenly">
        <div className="h-[40%] ">
          <Deliveries data={fakeDataPendings} />
        </div>
        <div className="h-[55%] ">
          <Deliveries
            lemmonTitle={'historial de repartos'}
            deliveryType={'history'}
            data={fakeDataHistory}
          />
        </div>
      </div>
      <ButtomBottom
        handleButton={handleButton}
        buttonClassName={'bg-darkGreen w-[270px] mb-4'}
        titleButtomClasses={'text-lemonGreen'}
        titleButtom="obtener paquetes"
      />
    </main>
  );
}
