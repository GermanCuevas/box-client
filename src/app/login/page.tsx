'use client';
import { BoxTitleLogin } from '@/commons/Icons';
import Input from '@/commons/Input';
import React from 'react';
import ButtomBottom from '@/commons/ButtomBottom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('Correo necesario'),
    password: Yup.string().required('Contraseña requerida')
  });

  const onSubmit = (values: any) => {
    // Maneja la lógica de envío del formulario aquí
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <section className="h-screen w-full bg-darkGreen bg-[url(../../public/img/BgLogin.svg)] flex justify-center items-center py-4 px-7">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-lightGreen h-[305px] w-full max-w-[300px] relative rounded-[15px]"
      >
        <div className="flex flex-col gap-4 mb-8 mt-16 mx-5">
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="email"
            placeholder="Email@contraseña.com"
            {...formik.getFieldProps('email')}
          />
          <Input
            inputClasses="bg-lightGreen leading-normal tracking-tight font-light"
            type="password"
            placeholder="contraseña"
            eyeOn={false}
            {...formik.getFieldProps('password')}
          />
          <div className="relative">
            {formik.touched.password && formik.errors.password && (
              <>
                <div className="absolute">
                  <div className="text-xs">{formik.errors.email}</div>
                  <div className="text-xs">{formik.errors.password}</div>
                </div>
              </>
            )}
          </div>
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
      </form>
    </section>
  );
}
