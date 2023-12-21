import React, { useState } from 'react';
import { CheckOff } from './icons/CheckOff';
import { CheckOn } from './icons/CkeckOn';

interface Question {
  question: string;
  text: string;
  className?: string;
}

export default function QuestionConfirmation({ question, text }: Question) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggleCheck1 = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const handleToggleCheck2 = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  };

  return (
    <div
      className={'w-[300px] min-h-[100px] rounded-[15px] m-auto bg-white flex items-center mb-2'}
    >
      <div className={'ml-2 flex flex-row items-center'}>
        <div className={'flex flex-col ml-1'}>
          <div className="mt-2 mb-1 text-xs">
            <h1>
              <span className="bg-lightPurple rounded pl-1 pr-1">Requerido*</span>
            </h1>
          </div>
          <h2 className={'text-sm text-center mr-4'}>{question}</h2>
          <h3 className={'text-xs text-center mr-4 mt-1'}>{text}</h3>
          <div className={'w-[275px] border-b-[.1px] border-b-darkGreen mt-2'} />
          <div className="flex justify-center items-center gap-3 mt-3 mb-2">
            <CheckOff
              classNameCheck={`border-darkGreen border-[1px] w-[19px] h-[19px] ${
                isChecked1 ? 'active' : ''
              }`}
              onClick={handleToggleCheck1}
            />{' '}
            Si
            {isChecked1 && <CheckOn classNameCheck="absolute mr-24 ml-2" />}
            <CheckOff
              classNameCheck={`border-darkGreen border-[1px] w-[19px] h-[19px] ${
                isChecked2 ? 'active' : ''
              }`}
              onClick={handleToggleCheck2}
            />
            No
            {isChecked2 && <CheckOn classNameCheck="absolute ml-6" />}
          </div>
        </div>
      </div>
    </div>
  );
}
