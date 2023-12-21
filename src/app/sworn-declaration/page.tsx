'use client';
import React from 'react';
//commons
import LemmonButton from '@/commons/LemmonButton';
//components
import ButtonBottom from '@/commons/ButtonBottom';
//icons
import Link from 'next/link';
import QuestionConfirmation from '@/commons/QuestionConfirmation';

export default function SwornDeclaration() {
  return (
    <div className="flex flex-col items-center justify-center py-4 h-[92.5]">
      <div className="w-full max-w-[300px]">
        <div className="text-center mb-2 mt-2 tracking-normal">
          <LemmonButton title={'declaración jurada'} width={'w-full'} icon={''} />
        </div>
        <div>
          <QuestionConfirmation
            question={'¿Ha consumido bebidas alcohólicas en las últimas 12 horas?'}
            text={''}
          />
          <QuestionConfirmation
            question={'¿Usted está haciendo uso de algún tipo de medicamento psicoactivo?'}
            text={'por ejemplo tranquilizantes, antigripales antialérgicos o para insomnio'}
          />
          <QuestionConfirmation
            question={
              '¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga?'
            }
            text={''}
          />
        </div>
        <div className="w-[300px] rounded-[15px]">
          <div className="bg-lightGreen gap-y-3 mt-[30px] relative">
            <Link href={'/'}>
              <ButtonBottom
                titleButton={'continuar'}
                buttonClassName={'text-lemonGreen uppercase bg-darkGreen w-[300px] p-2'}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
