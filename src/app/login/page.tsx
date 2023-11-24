'use client';
import React, { useState, ChangeEvent } from 'react';
//router
import { useRouter } from 'next/navigation';
//redux
import { useAppDispatch } from '@/store/hooks';
import { setUserAuth } from '@/store/slices/userSlice';
// import { useGetUserByIdQuery , useGetUsersQuery } from '@/store/services/userApi';
//commons
import { BoxTitleLogin } from '@/commons/Icons';
import Input from '@/commons/Input';
import ButtomBottom from '@/commons/ButtomBottom';

export default function Login() {
  //redux
  const dispatch = useAppDispatch();
  // const { data : users  , isLoading , isError , error , isFetching } = useGetUsersQuery(null)
  //router
  const router = useRouter();

  //useState
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  //functions
  const handleChangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setUserAuth(true));

    // const user = users?.filter(user => user.email === userInfo.email && user.password === userInfo.password )

    // console.log(user);

    router.push('/');
  };
  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <section className="h-screen w-full bg-darkGreen bg-[url(../../public/img/BgLogin.svg)] flex justify-center items-center py-4 px-7">
      <form
        onSubmit={handleSubmit}
        className="bg-lightGreen h-[305px] w-full max-w-[300px] relative rounded-[15px]"
      >
        <div className="flex flex-col gap-y-4 mb-8 mt-16 mx-5">
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="email"
            placeholder="Email@contraseña.com"
            handleChange={handleChangeUserInfo}
            name="email"
          />
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="password"
            placeholder="contraseña"
            eyeOn={false}
            handleChange={handleChangeUserInfo}
            name="password"
          />
        </div>
        <div className="flex flex-col gap-y-3 mt-8 mx-5 ">
          <ButtomBottom
            typeButton={true}
            titleButtom="Ingresar"
            buttonClassName="uppercase bg-darkGreen w-[100%]"
            titleButtomClasses={'text-lemonGreen'}
          />
          <ButtomBottom
            handleButton={handleRegister}
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
      </form>
    </section>
  );
}
