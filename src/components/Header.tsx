import LogoutButton from '@/commons/LogoutButton';
import Image from 'next/image';

export default function Header() {
  return (
    <header className=" w-full px-7 flex justify-between items-center">
      <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
      <LogoutButton text={'CERRAR SESIÓN'} classNameButton={'py-0.5 px-2.5'} />
    </header>
  );
}
