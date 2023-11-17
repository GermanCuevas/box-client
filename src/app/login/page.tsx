import { BoxTitleLogin } from '@/commons/Icons'
import Input from '@/commons/Input'
import React from 'react'
import ButtomBottom from '@/commons/ButtomBottom'

export default function Login() {
  return (
    <section className="h-screen w-full bg-darkGreen bg-[url(../../public/img/BgLogin.svg)] flex justify-center items-center py-4 px-7">
      <div className="bg-lightGreen h-[305px] w-full max-w-[300px] relative rounded-[15px]">
        <div className="flex flex-col gap-y-4 mb-8 mt-16 mx-5">
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="email"
            placeholder="Email@contraseña.com"
          />
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="password"
            placeholder="contraseña"
            eyeOn={false}
          />
        </div>
        <div className="flex flex-col gap-y-3 mt-8 mx-5 ">
          <ButtomBottom
            titleButtom="Ingresar"
            buttonClassName="uppercase bg-darkGreen w-[100%]"
            titleButtomClasses={'text-lemonGreen'}
          />
          <ButtomBottom
            titleButtom="Crear tu cuenta"
            buttonClassName="uppercase w-[100%]"
            titleButtomClasses="text-darkGreen "
          />
          <p className={'text-center text-darkGreen underline text-[13px]'}>Olvidé mi contraseña</p>
        </div>
        <div className=" bg-lemonGreen w-full max-w-[200px] h-[69px] absolute -top-9 left-0 rounded-t-[15px] rounded-r-[15px]">
          <div className="w-full h-full flex justify-center items-center">
            <BoxTitleLogin />
          </div>
        </div>
      </div>
      {/* <div
        className=" bg-lightGreen h-[305px] w-[300px] 
      m-auto absolute top-[185px] left-[30px] 
      rounded-[15px] flex flex-col justify-center items-center">
        <div className="relative top-[40px] w-[270px] m-auto">
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="email"
            placeholder="Email@contraseña.com"
          />
        </div>
        <div className="relative top-[5px] w-[270px] m-auto">
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="password"
            placeholder="contraseña"
          />
        </div>
        <div className="relative top-[13px]">
          <ButtomBottom
            titleButtom="ingresar"
            titleButtomClasses="text-lemonGreen"
            buttonClassName="bg-darkGreen"
          />
        </div>
        <div className="relative top-[23px]">
          <ButtomBottom
            titleButtom="crear cuenta"
            titleButtomClasses="text-darkGreen font-normal"
          />
        </div>
        <p className="relative top-[7px] m-auto text-xs text-darkGreen font-normal underline">
          Olvidé mi contraseña
        </p>
      </div> */}
      {/* <div className=" bg-lemonGreen w-[204px] h-[69px] absolute top-[150px] left-[30px] rounded-t-[15px] rounded-r-[15px]">
        <div className="absolute top-[9px] left-[10px]">
          <BoxTitleLogin />
        </div>
      </div> */}
    </section>
  )
}
