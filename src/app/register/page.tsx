'use client'
import ButtomBottom from '@/commons/ButtomBottom'
import { CameraPlus, BoxTitle } from '@/commons/Icons'
import Input from '@/commons/Input'
import LemmonButton from '@/commons/LemmonButton'

import { roboto } from '../../../public/fonts/fonts'

export default function Register() {
  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 px-7">
      <div className={`w-full max-w-[300px] ${roboto.className}`}>
        <div>
          <BoxTitle width="90" height="40" />
        </div>
        <div className="mb-3 mt-4  tracking-normal w-full">
          <LemmonButton title="creá tu cuenta" height="40px" width="100%" />
        </div>
        <div className="w-full">
          <div className="bg-white  p-5 rounded-[13px] ">
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
          </div>
        </div>
      </div>
    </div>
  )
}

/* 
<div className="bg-lightGreen w-full h-screen py-4 px-7">
      <div>
        <BoxTitle width="90" height="40" />
      </div>

      <div className="mb-3 mt-4  tracking-normal">
        <LemmonButton title="creá tu cuenta" height="40px" width="100%" />
      </div>
      <div className="w-full">
        <div className="bg-white  p-5 rounded-[13px] ">
          <form action="" className="flex flex-col gap-y-4">
            <div className="flex justify-center items-center mb-2">
              <div className="p-8 bg-lightWhite rounded-[1.7rem]">
                <CameraPlus />
              </div>
            </div>
            <Input placeholder="Nombre" type="text" />
            <Input placeholder="Apellido" type="text" />
            <Input placeholder="Email@contraseña.com" type="email" />
            <Input placeholder="**********" type="password" eyeOn />
            <Input placeholder="Confirmar contraseña" type="password" eyeOn />
            <div className="flex flex-col gap-y-3 mt-8">
              <ButtomBottom
                titleButtom="Crear"
                buttonClassName="uppercase bg-darkGreen w-[100%]"
                titleButtomClasses="text-lightGreen"
              />
              <ButtomBottom
                titleButtom="Iniciar sesión"
                buttonClassName="uppercase w-[100%]"
                titleButtomClasses="text-darkGreen "
              />
              <p className={`text-center text-darkGreen underline text-[14px] ${roboto.className}`}>
                ¿Ya tenés tu cuenta?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div> */
