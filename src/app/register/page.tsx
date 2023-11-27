'use client';
import ButtomBottom from '@/commons/ButtomBottom';
import { CameraPlus, BoxTitle } from '@/commons/Icons';
import Input from '@/commons/Input';
import LemmonButton from '@/commons/LemmonButton';

import { roboto } from '../../../public/fonts/fonts';
import { usePostUserMutation } from '@/store/services/userApi';
//formik
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
// import { useAppDispatch } from '@/store/hooks';
// import { setUserInfo } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';
export default function Register() {
  const [postUser] = usePostUserMutation();

  const initialValues = {
    lastname: '',
    email: '',
    name: '',
    password: '',
    password_validate: ''
  };
  // const dispatch = useAppDispatch();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('Correo necesario'),
    password: Yup.string().required('Contraseña requerida'),
    password_validate: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
      .required('Confirmación de contraseña requerida'),
    name: Yup.string().required('Nombre requerido'),
    lastname: Yup.string().required('Apellido requerido')
  });

  const onSubmit = async (
    values: {
      email: string;
      password: string;
      name: string;
      password_validate: string;
      lastname: string;
    },
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
      name: string;
      password_validate: string;
      lastname: string;
    }>
  ) => {
    if (values.password === values.password_validate) {
      const objToPush = {
        name: values.name + ' ' + values.lastname,
        email: values.email,
        password: values.password
      };

      try {
        await postUser(objToPush).unwrap();

        router.push('/login');
      } catch (error) {
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
  });

  const handleSessionInit = () => {
    router.push('/login');
  };

  return (
    <div className="bg-lightGreen w-full flex flex-col items-center justify-center h-screen py-4 px-7">
      <div className={`w-full max-w-[300px] ${roboto.className}`}>
        <div>
          <BoxTitle width="90" height="40" />
        </div>
        <div className="mb-3 mt-4  tracking-normal w-full">
          <LemmonButton title="creá tu cuenta" width={'w-full'} />
        </div>
        <div className="w-full">
          <div className="bg-white  p-5 rounded-[13px] ">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-4">
              <div className="flex justify-center items-center mb-2">
                <div className="p-8 bg-lightWhite rounded-[1.7rem]">
                  <CameraPlus />
                </div>
              </div>
              <Input {...formik.getFieldProps('lastname')} placeholder="Apellido" type="text" />
              <Input {...formik.getFieldProps('name')} placeholder="Nombre" type="text" />
              <Input
                {...formik.getFieldProps('email')}
                placeholder="Email@domain.com"
                type="email"
              />
              <Input
                {...formik.getFieldProps('password')}
                placeholder="Contraseña"
                type="password"
                eyeOn={true}
              />
              <Input
                {...formik.getFieldProps('password_validate')}
                placeholder="Confirmar contraseña"
                type="password"
                eyeOn={false}
              />
              <div className="flex flex-col gap-y-3 mt-8">
                <ButtomBottom
                  typeButton={true}
                  titleButtom="Crear"
                  buttonClassName="uppercase bg-darkGreen w-[100%]"
                  titleButtomClasses={'text-lightGreen'}
                />
                <ButtomBottom
                  handleButton={handleSessionInit}
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
