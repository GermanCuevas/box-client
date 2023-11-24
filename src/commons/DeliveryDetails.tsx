import React from 'react';
import { Circle } from './Icons';

interface delivery {
  percentage?: number;
}

export default function DeliveryDetails({ percentage = 0 }: delivery) {
  console.log(percentage);

  const rotationAngle = (percentage / 100) * 360;
  console.log(rotationAngle);

  const purpleCircleStyle = {
    transform: `rotate(${rotationAngle}deg)`
  };
  const centralPointStyle = {
    top: `${50 - Math.cos((rotationAngle - 90) * (Math.PI / 180)) * 35}%`,
    left: `${50 + Math.sin((rotationAngle - 90) * (Math.PI / 180)) * 35}%`
  };

  return (
    <div className=" bg-white border-darkGreen border-b-[0.5px]">
      <div className="flex items-center justify-center p-3">
        <div className="w-[80px] h-[80px] relative">
          <div className="w-[71px] h-[71px] absolute border-lightWhite border-4 rounded-full"></div>
          <div
            style={purpleCircleStyle}
            className="w-[71px] h-[71px] absolute rounded-full border-4 border-lightPurple -rotate-125 "
          ></div>
          <div
            style={centralPointStyle}
            className="w-[11px] h-[11px] absolute bg-lightPurple rounded-full shadow"
          ></div>
        </div>
      </div>
      <Circle />
    </div>
  );
}
