/* 'use client';
import ButtomBottom from '@/commons/ButtomBottom';
import LemmonButton from '@/commons/LemmonButton';
import { roboto } from '../../../public/fonts/fonts';

import { MapComponent } from '@/components/maps';

export default function Shipment() {
  return (
    <section className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-50px)] py-4 ">
      <div className={`w-full max-w-[300px] ${roboto.className}`}>
        <div className="mb-3 mt-[.4rem]  tracking-normal w-full">
          <LemmonButton title="Reparto en curso" width={'w-full'} />
        </div>
        <div className="w-full">
          <MapComponent
            destino="Yerbal"
            coordinates={[-34.60756683, -58.43708801]}
            numPackage="#4546SD"
            userInfo="Ivan Lucana"
          />
          <div className="flex flex-col gap-y-3 mt-8">
            <ButtomBottom
              titleButtom="Finalizar"
              buttonClassName="uppercase bg-darkGreen w-[100%]"
              titleButtomClasses={'text-lightGreen'}
            />
            <ButtomBottom
              titleButtom="Cancelar entrega"
              buttonClassName="uppercase w-[100%]"
              titleButtomClasses="text-darkGreen "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
 */
