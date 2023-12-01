'use client';
//icons
import { CameraPlus } from '@/commons/icons/CameraPlus';
//commons
import ButtonBottom from '@/commons/ButtonBottom';
import Input from '@/commons/Input';
import LemmonButton from '@/commons/LemmonButton';

import { useRouter } from 'next/navigation';
import useInput from '@/hooks/useInput';

import { usePostUserMutation } from '@/store/services/userApi';

export default function Register() {
  const name = useInput('name');
  const lastname = useInput('lastname');
  const mail = useInput('mail');
  const password = useInput('password');
  const repeatPassword = useInput('password');

  //const dispatch = useAppDispatch();
  const [postUser] = usePostUserMutation();
  const router = useRouter();

  const handleSessionInit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.value === repeatPassword.value) {
      const objToPush = {
        name: name.value + ' ' + lastname.value,
        email: mail.value,
        password: password.value
      };

      try {
        await postUser(objToPush).unwrap();
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-4 px-7">
      <div className={'w-full max-w-[300px] '}>
        <div className="mb-3 tracking-normal w-full">
          <LemmonButton title="creá tu cuenta" width={'w-full'} />
        </div>
        <div className="w-full">
          <div className="bg-white  p-5 rounded-[13px] ">
            <form onSubmit={handleSessionInit} className="flex flex-col gap-y-4">
              <div className="flex justify-center items-center mb-2">
                <div className="p-8 bg-lightWhite rounded-[1.7rem]">
                  <CameraPlus />
                </div>
              </div>

              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={name.value}
                  onChange={name.onChange}
                  onFocus={name.focus}
                  onBlur={name.blur}
                  placeholder="Nombre"
                  type="text"
                  inputClasses=""
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{name.message}</p>
              </div>
              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={lastname.value}
                  onChange={lastname.onChange}
                  onFocus={lastname.focus}
                  onBlur={lastname.blur}
                  placeholder="Apellido"
                  type="text"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{lastname.message}</p>
              </div>
              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={mail.value}
                  onChange={mail.onChange}
                  onFocus={mail.focus}
                  onBlur={mail.blur}
                  placeholder="Email@domain.com"
                  type="email"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{mail.message}</p>
              </div>
              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={password.value}
                  onChange={password.onChange}
                  onFocus={password.focus}
                  onBlur={password.blur}
                  placeholder="Contraseña"
                  type="password"
                  eyeOn={true}
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{password.message}</p>
              </div>
              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={repeatPassword.value}
                  onChange={repeatPassword.onChange}
                  onFocus={repeatPassword.focus}
                  onBlur={repeatPassword.blur}
                  placeholder="Confirmar contraseña"
                  type="password"
                  eyeOn={false}
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{repeatPassword.message}</p>
              </div>

              <div className="flex flex-col gap-y-3 mt-8">
                <ButtonBottom
                  typeButton={true}
                  titleButton="Crear"
                  buttonClassName="uppercase bg-darkGreen w-[100%]"
                  titleButtonClasses={'text-lightGreen'}
                />
                <ButtonBottom
                  titleButton="Iniciar sesión"
                  buttonClassName="uppercase w-[100%]"
                  titleButtonClasses="text-darkGreen "
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
  );
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
              <ButtonBottom
                titleButton="Crear"
                buttonClassName="uppercase bg-darkGreen w-[100%]"
                titleButtonClasses="text-lightGreen"
              />
              <ButtonBottom
                titleButton="Iniciar sesión"
                buttonClassName="uppercase w-[100%]"
                titleButtonClasses="text-darkGreen "
              />
              <p className={`text-center text-darkGreen underline text-[14px] ${roboto.className}`}>
                ¿Ya tenés tu cuenta?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div> */
