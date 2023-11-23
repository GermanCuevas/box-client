import React from 'react';
import { roboto } from '../../public/fonts/fonts';
import Image from 'next/image';
import { Group } from './Icons';

interface hello {
  name?: string;
  imagen?: string;
  subTitle?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function HelloAdmin({ name, imagen, subTitle, className, icon }: hello) {
  return (
    <div
      className={`w-[300px] min-h-[100px] rounded-[15px] m-auto  bg-white flex items-center${
        className || ''
      }`}
    >
      <div className={`ml-4 flex flex-row items-center ${className || ''}`}>
        <Image
          src={imagen || '/img/Mask group.png'}
          alt=""
          height={60}
          width={60}
          className="mr-2"
        />
        <div className={'flex flex-col ml-2'}>
          <h1 className={`text-darkGreen font-bold ${roboto.className}`}>{name}</h1>
          <h2 className={`text-darkGreen text-sm ${roboto.className} ${className || ''}`}>
            {subTitle}
          </h2>
        </div>

        {icon || <Group classNameGroup="ml-16" />}
      </div>
    </div>
  );
}
