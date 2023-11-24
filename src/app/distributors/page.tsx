'use client';

import { BoxTitle } from '@/commons/Icons';
import BoxTitle2 from '@/commons/BoxTitle';

import LemmonButton from '@/commons/LemmonButton';

export default function Distributors() {
  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 px-7">
      <div className={'w-full max-w-[300px]'}>
        <div>
          <BoxTitle width="90" height="40" />
        </div>
        <div className="mb-3 mt-4  tracking-normal w-full">
          <LemmonButton title="repartidores" width={'w-full'} />
        </div>
        <div className="flex h-[4rem]">
          <div className="basis-[30%] flex justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-darkGreen"></div>
          </div>
          <div className="basis-[40%]">2</div>
          <div className="basis-[30%]">3</div>
        </div>

        <div className="w-full">
          <BoxTitle2
            titleBox={'ENERO'}
            dateBox="mie/03"
            titleBoxClasses="font-bold"
            dateBoxClasses="font-bold"
            boxClasses={'justify-between h-[2.6rem] mx-5'}
          />
          <div className="bg-white  p-5 rounded-b-[13px] ">
            <div className="">1</div>
            <div>2</div>
            <div>3</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
