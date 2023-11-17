import { BoxTitleLogin } from '@/commons/Icons'
import Input from '@/commons/Input'
import React from 'react'
import ButtomBottom from '@/commons/ButtomBottom'

export default function Login() {
  return (
    <section className=" h-screen bg-darkGreen bg-[url(../../public/img/BgLogin.svg)]">
      <div className=" bg-lightGreen h-[305px] w-[300px] m-auto absolute top-[185px] left-[30px] rounded-[15px] flex flex-col justify-center items-center">
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
      </div>
      <div className=" bg-lemonGreen w-[204px] h-[69px] absolute top-[150px] left-[30px] rounded-t-[15px] rounded-r-[15px]">
        <div className="absolute top-[9px] left-[10px]">
          <BoxTitleLogin />
        </div>
      </div>
    </section>
  )
}
