import Image from 'next/image'

export default function Header() {
  return (
    <div className="w-full h-[70px]">
      <div className="py-[12px] px-[30px] flex justify-between items-center">
        <Image src={'/img/box.svg'} width={80} height={30} alt="Logo box" />
        {/* BOTON FAKE */}
        <button className="border rounded-xl text-xs h-4/5 py-0.5 px-2.5">CERRAR SESION</button>
      </div>
    </div>
  )
}
