'use client';
import ButtomBottom from '@/commons/ButtomBottom';
import LemmonButton from '@/commons/LemmonButton';
import { roboto } from '../../../public/fonts/fonts';
import Header from '@/components/Header';

export default function Shipment() {
  return (
    <section className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 ">
      <Header />
      <div className={`w-full max-w-[300px] ${roboto.className}`}>
        <div className="mb-3 mt-6  tracking-normal w-full">
          <LemmonButton title="Reparto en curso" width={'w-full'} />
        </div>
        <div className="w-full">
          <div className="relative">
            <img src="/img/reparto.png" alt="hola" className="h-[396px] rounded-[13px]" />
            <div className="absolute inset-0 flex justify-center items-end ">
              <div className="bg-lightPurple mb-6 w-full mx-4 rounded-[15px]">
                <div className={`flex flex-col leading-4 p-4 ${roboto.className} text-[12px]`}>
                  <h2>
                    <span className="font-bold">Destino: </span>Amenabar 2100, CABA
                  </h2>
                  <h2>
                    <span className="font-bold">Número de paquete: </span>#0A235
                  </h2>
                  <h2>
                    <span className="font-bold">Recibe: </span>David Rodriguez
                  </h2>
                </div>
              </div>
            </div>
          </div>
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

          {/* <div className="bg-white  p-5 rounded-[13px] ">
            <form action="" className="flex flex-col gap-y-4">
              <div className="flex justify-center items-center mb-2">
                <div className="p-8 bg-lightWhite rounded-[1.7rem]">
                  <CameraPlus />
                </div>
              </div>
              <Input placeholder="Nombre" type="text" />
              <Input placeholder="Apellido" type="text" />
              <Input placeholder="Email@contraseña.com" type="email" />
              <Input placeholder="**********" type="password" eyeOn={true} />
              <Input placeholder="Confirmar contraseña" type="password" eyeOn={false} />
              <div className="flex flex-col gap-y-3 mt-8">
                <ButtomBottom
                  titleButtom="Crear"
                  buttonClassName="uppercase bg-darkGreen w-[100%]"
                  titleButtomClasses={'text-lightGreen'}
                />
                <ButtomBottom
                  titleButtom="Iniciar sesión"
                  buttonClassName="uppercase w-[100%]"
                  titleButtomClasses="text-darkGreen "
                />
                <p className={'text-center text-darkGreen underline text-[14px]'}>
                  ¿Ya tenés tu cuenta?
                </p>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}
