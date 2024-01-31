'use client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronBox } from '@/commons/icons/ChevronBox';
import { useState } from 'react';

import Input from '@/commons/Input';
import ButtonBottom from '@/commons/ButtonBottom';
import LemmonButton from '@/commons/LemmonButton';
import useInput from '@/hooks/useInput';
import { usePostAddPackageMutation } from '@/store/services/adminApi';

interface AddPackageProps {
  // props?
}

const AddPackage: React.FC<AddPackageProps> = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const address = useInput('address');
  const city = useInput('city');
  const name = useInput('name');
  const deliveryCode = useInput('deliveryCode');
  const package_weight = useInput('package_weight');

  const [postPackage] = usePostAddPackageMutation();

  const handleAddPackage = async () => {
    type createPackage = {
      city: string;
      address: string;
      package_weight: number;
      startDate: Date | null;
      deliveryCode: string;
      receptorName: string;
    };

    try {
      // Crear el objeto de datos para la mutación
      const body: createPackage = {
        startDate,
        address,
        receptorName: name,
        package_weight: parseInt(package_weight),
        city,
        deliveryCode
      };

      // Llamar a la mutación
      await postPackage(body);

      // La mutación fue exitosa
      console.log('Paquete añadido con éxito!');
    } catch (error) {
      // Manejar errores de la mutación
      console.error('Error al añadir el paquete:', error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-start pt-2 px-7">
      <div>
        <div className="mb-3 mt-4  tracking-normal w-full">
          <LemmonButton title="agregar paquetes" width={'w-full'} />
        </div>
        <div className="w-full ">
          <div className="bg-white  pt-[35px] pr-[20px] pb-[187px] pl-[20px] rounded-[13px] ">
            <form action="" className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={city.value}
                  onChange={city.onChange}
                  onBlur={city.blur}
                  onFocus={city.focus}
                  placeholder="City"
                  type="text"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{address.message}</p>
              </div>

              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={address.value}
                  onChange={address.onChange}
                  onBlur={address.blur}
                  onFocus={address.focus}
                  placeholder="Dirección"
                  type="text"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{address.message}</p>
              </div>

              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={name.value}
                  onChange={name.onChange}
                  onBlur={name.blur}
                  onFocus={name.focus}
                  placeholder="Nombre de quien recibe"
                  type="text"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{name.message}</p>
              </div>

              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={package_weight.value}
                  onChange={package_weight.onChange}
                  onBlur={package_weight.blur}
                  onFocus={package_weight.focus}
                  placeholder="Peso del paquete (Kg)"
                  type="email"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{package_weight.message}</p>
              </div>

              <div className="flex flex-col gap-y-[5px]">
                <Input
                  value={deliveryCode.value}
                  onChange={deliveryCode.onChange}
                  onBlur={deliveryCode.blur}
                  onFocus={deliveryCode.focus}
                  placeholder="Código de entrega"
                  type="text"
                />
                <p className="h-[5px] text-[12px] text-[#B6371C]">{deliveryCode.message}</p>
              </div>

              <div className="relative mt-1">
                <span>Fecha de entrega</span>
                <div className="border border-black rounded-md pt-[6px] pr-[11px] pb-[5px] pl-[15px] ">
                  <DatePicker
                    className="outline-none w-[232px] cursor-pointer"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                  />
                </div>
                <div className="absolute bottom-[8px] right-[11px] pointer-events-none">
                  <ChevronBox />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-lightGreen flex flex-col gap-y-3 mt-[10px] mb-10 relative">
            <ButtonBottom
              titleButton={'AGREGAR'}
              buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
              handleButton={handleAddPackage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
