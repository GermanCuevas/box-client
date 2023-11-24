'use client';
import LogoutButton from '@/commons/LogoutButton';
import { useAppSelector } from '@/store/hooks';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { userAuth } = useAppSelector((state) => state.user);
  const router = useRouter();

  if (!userAuth) {
    router.push('/login');
  }
  return (
    <header className=" w-full px-7 flex justify-between items-center">
      <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
      <LogoutButton text={'CERRAR SESIÓN'} classNameButton={'py-0.5 px-2.5'} />
    </header>
  );
}
