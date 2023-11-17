import LogoutButton from '@/commons/LogoutButton'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="w-full">
      <div className=" flex justify-between items-center">
        <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
        {/* BOTON FAKE */}
        <LogoutButton
          text={'CERRAR SESIÓN'}
          classNameButton={'py-0.5 px-2.5 text-[.7rem] leading-6'}
        />
      </div>
    </div>
  )
}
