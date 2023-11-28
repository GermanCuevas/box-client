'use client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronBox } from '@/commons/icons/ChevronBox';
import { useState } from 'react';

import { BoxTitle } from '@/commons/icons/BoxTitle';
import Input from '@/commons/Input';
import ButtomBottom from '@/commons/ButtomBottom';
import LemmonButton from '@/commons/LemmonButton';

interface AddPackageProps {
  // props?
}

const AddPackage: React.FC<AddPackageProps> = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 px-7">
      <div className={'w-full max-w-[300px] '}>
        <div>
          <BoxTitle width="90" height="40" />
        </div>
        <div className="mb-3 mt-4  tracking-normal w-full">
          <LemmonButton title="agregar paquetes" width={'w-full'} />
        </div>
        <div className="w-full ">
          <div className="bg-white  pt-[35px] pr-[20px] pb-[187px] pl-[20px] rounded-[13px] ">
            <form action="" className="flex flex-col gap-y-4">
              <Input placeholder="Dirección" type="text" />
              <Input placeholder="Nombre de quien recibe" type="text" />
              <Input placeholder="Peso del paquete (Kg)" type="email" />
              <div className="relative">
                <span>Fecha de entrega</span>
                <div className="border border-black rounded-md pt-[6px] pr-[11px] pb-[5px] pl-[15px] ">
                  <DatePicker
                    className="outline-none w-[232px] cursor-pointer"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                  />
                </div>
                <div className="absolute bottom-[8px] right-[11px] pointer-events-none">
                  <ChevronBox />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-lightGreen flex flex-col gap-y-3 mt-[10px] relative">
            <ButtomBottom
              titleButtom={'AGREGAR'}
              buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
