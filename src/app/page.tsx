import ButtomBottom from '@/commons/ButtomBottom';
import { BoxTitle } from '@/commons/Icons';
import LogoutButton from '@/commons/LogoutButton';
import Deliveries from '@/components/Deliveries';

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
  return (
    <main className="bg-lightGreen h-[100vh] flex flex-col justify-evenly pt-5">
      <header className={'flex justify-between px-8'}>
        <BoxTitle />
        <LogoutButton classNameButton={'text-[12px] border-[1px]  px-4'} text={'cerrar sesión'} />
      </header>
      <Deliveries data={fakeDataPendings} />
      <Deliveries deliveryType={'history'} data={fakeDataHistory} />

      <ButtomBottom
        buttonClassName={'bg-darkGreen w-[270px]'}
        titleButtomClasses={'text-lemonGreen'}
        titleButtom="obtener paquetes"
      />
    </main>
  );
}
