import React from 'react'
import { roboto } from '../../public/fonts/fonts'
interface hello {
  name?: string
  imagen?: string
}

export default function HelloAdmin({ name, imagen }: hello) {
  return (
    <div className="w-[300px] min-h-[100px] rounded-[15px] m-auto  bg-white flex  items-center">
      <div className="ml-4 flex flex-col  items-center">
        <img src={imagen || '/img/Mask group.png'} alt="" className="h-[60px] w-[60px] mr-2" />
      </div>
      <div className={'ml-4 flex flex-col'}>
        <h1 className={`text-darkGreen font-bold ${roboto.className}`}>¡Hola Admin!{name}</h1>
        <h2 className={`text-darkGreen text-sm ${roboto.className}`}>
          Estos son los pedidos del día
        </h2>
      </div>
    </div>
  )
}
