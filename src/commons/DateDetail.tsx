'use client';
import React, { useState } from 'react';
//icons
import { ArrowLeftBox } from './icons/ArrowLeftBox';
import { ArrowRightBox } from './icons/ArrowRightBox';
//font
import { saira } from '../../public/fonts/fonts';

export default function DateDetail() {
  const todayDate = new Date();
  const weekDays = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const dates = [];
  for (let i = -2; i <= 2; i++) {
    const date = new Date();
    date.setDate(todayDate.getDate() + i);
    dates.push(date);
  }

  const handleDateClick = (date: Date) => {
    if (date <= todayDate) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="max-w-[300px] w-full h-[54px] m-auto bg-white flex justify-center items-center rounded-b-[15px] ">
      <div className="flex justify-around items-center w-[96%]">
        <div>
          <ArrowLeftBox />
        </div>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`text-center leading-4 text-darkGreen ${
              date.getDate() === selectedDate.getDate()
                ? 'bg-lemonGreen w-[34px] h-[34px] rounded-[5px]'
                : ''
            } ${index > 0 && date > todayDate ? 'opacity-50' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            <div className="text-xs">{weekDays[date.getDay()]}</div>
            <div className={`${saira.className} font-bold`}>
              {date.getDate().toString().padStart(2, '0')}
            </div>
          </div>
        ))}
        <div>
          <ArrowRightBox />
        </div>
      </div>
    </div>
  );
}
