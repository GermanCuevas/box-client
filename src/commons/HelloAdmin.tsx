import React from 'react';
import Image from 'next/image';

interface hello {
  name?: string;
  editMode?: boolean;
  imagen?: string;
  subTitle?: string;
  className?: string;
  classNamediv1?: string;
  classNamediv2?: string;
  classNameh2?: string;
  classNameGroup?: string;
  icon?: React.ReactNode;
}

export default function HelloAdmin({
  name = 'Victoria!',
  editMode = true,
  imagen = '/img/Mask group.png',
  subTitle = 'HABILITADO',
  classNamediv1,
  classNamediv2,
  classNameh2
}: hello) {
  // const [editMode, setEditMode] = useState(true);
  // const [subTitle, setSubTitle] = useState('HABILITADO');

  // const handleSwitchChange = () => {
  //   setEditMode(!editMode);
  //   setSubTitle(editMode ? 'DESHABILITADO' : 'HABILITADO');
  // };

  return (
    <div
      className={`w-[300px] min-h-[90px] rounded-[15px] m-auto  bg-white flex items-center${
        classNamediv1 || ''
      }`}
    >
      <div className={`ml-4 flex flex-row items-center ${classNamediv2 || ''}`}>
        <Image src={imagen} alt="" height={60} width={60} className="mr-2" />
        <div className={'flex flex-col ml-2'}>
          <h1 className={'text-darkGreen font-bold'}>{name}</h1>
          {editMode ? (
            <h2
              className={`text-darkGreen text-sm bg-lightGreen rounded pl-1 pr-1 font-bold ${
                classNameh2 || ''
              }`}
            >
              {subTitle}
            </h2>
          ) : (
            <h2 className={`text-darkGreen text-sm ${classNameh2 || ''}`}>{subTitle}</h2>
          )}
        </div>
        {editMode ? (
          <label className="relative inline-flex items-center cursor-pointer ml-16">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              // onChange={handleSwitchChange}
            />
            <div className="w-11 h-6 bg-darkGreen rounded-full peer dark:bg-gray-700 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-lemonGreen after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-lemonGreen after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-darkGreen peer-checked:bg-green-600"></div>
          </label>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
