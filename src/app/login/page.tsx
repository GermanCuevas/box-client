'use client';
import React from 'react';
//router
import { useRouter } from 'next/navigation';
//redux
/* import { useAppDispatch } from '@/store/hooks';

import { useGetUsersQuery } from '@/store/services/userApi'; */
//commons
//sd
import { BoxTitleLogin } from '@/commons/icons/BoxTitleLogin';
import Input from '@/commons/Input';
import ButtomBottom from '@/commons/ButtomBottom';

import useInput from '@/hooks/useInput';

export default function Login() {
  //redux
  /* const dispatch = useAppDispatch();
  const { data: users, isFetching } = useGetUsersQuery(null); */
  //router
  const router = useRouter();
  const mail = useInput('mail');
  const password = useInput('password');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mail.value);
    console.log(password.value);
  };

  /* const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('Correo necesario'),
    password: Yup.string().required('Contraseña requerida')
  });

  const onSubmit = (
    values: { email: string; password: string },
    formikHelpers: FormikHelpers<{ email: string; password: string }>
  ) => {
    // Maneja la lógica de envío del formulario aquí
    if (!isFetching) {
      const user = users?.filter((user) => {
        return values.email === user.email && user.password === values.password;
      });
      const userIsAuth = user?.length === 1;
      if (userIsAuth) {
        dispatch(setUserAuth(userIsAuth));
        router.push('/');
      } else {
        formikHelpers.setErrors({
          email: 'Correo electrónico o contraseña incorrectos',
          password: 'Correo electrónico o contraseña incorrectos'
        });
      }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  }); */

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <section className="h-screen w-full bg-darkGreen bg-[url(../../public/img/BgLogin.svg)] flex justify-center items-center py-4 px-7">
      <form
        onSubmit={handleOnSubmit}
        className="bg-lightGreen h-[305px] w-full max-w-[300px] relative rounded-[15px]"
      >
        <div className="flex flex-col gap-y-5 mb-8 mt-16 mx-5">
          <div className="flex flex-col gap-y-[5px]">
            <Input
              value={mail.value}
              onChange={mail.onChange}
              onBlur={mail.blur}
              onFocus={mail.focus}
              inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
              type="email"
              placeholder="Email@contraseña.com"
            />
            <p className="h-[5px] text-[12px] text-[#B6371C]">{mail.message}</p>
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <Input
              value={password.value}
              onChange={password.onChange}
              onBlur={password.blur}
              onFocus={password.focus}
              inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
              type="password"
              placeholder="contraseña"
              eyeOn={false}
            />
            <p className="h-[5px] text-[12px] text-[#B6371C]">{password.message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-10 mx-5 ">
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
