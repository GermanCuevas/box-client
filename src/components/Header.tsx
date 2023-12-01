'use client';
import { useEffect } from 'react';
import LogoutButton from '@/commons/LogoutButton';
import { useAppSelector } from '@/store/hooks';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const { userAuth } = useAppSelector((state) => state.user);
  const router = useRouter();
  const path = usePathname();
  //sd

  useEffect(() => {
    if (!userAuth && path !== '/login') {
      router.push('/login');
    }
  }, [userAuth, router, path]);

  if (path === '/login') {
    return null;
  }
  return (
    <header className=" w-full flex justify-center items-center pt-3">
      <div className="w-[300px] flex justify-between items-center">
        <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
        {path === '/register' ? null : (
          <LogoutButton text={'CERRAR SESIÓN'} classNameButton={'py-0.5 px-2.5'} />
        )}
      </div>
    </header>
  );
}
