import React from 'react';
import { roboto } from '../../public/fonts/fonts';
import Image from 'next/image';
interface hello {
  name?: string;
  imagen?: string;
  title?: string;
  subTitle?: string;
}

export default function HelloAdmin({ name, imagen, title, subTitle }: hello) {
  return (
    <div className="w-[300px] min-h-[100px] rounded-[15px] m-auto  bg-white flex  items-center">
      <div className="ml-4 flex flex-col  items-center">
        <Image
          src={imagen || '/img/Mask group.png'}
          alt=""
          height={60}
          width={60}
          className="mr-2"
        />
      </div>
      <div className={'ml-4 flex flex-col'}>
        <h1 className={`text-darkGreen font-bold ${roboto.className}`}>
          {title} {name}
        </h1>
        <h2 className={`text-darkGreen text-sm ${roboto.className}`}>{subTitle}</h2>
      </div>
    </div>
  );
}
