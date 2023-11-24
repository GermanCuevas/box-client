import React from 'react';
interface buttom {
  titleButtom?: string;
  titleButtomClasses?: string;
  buttonClassName?: string;
  typeButton?: boolean;
  handleButton?: () => void;
}

export default function ButtomBottom({
  typeButton = false,
  handleButton,
  titleButtom,
  titleButtomClasses,
  buttonClassName
}: buttom) {
  return (
    <button
      type={typeButton ? 'submit' : 'button'}
      onClick={handleButton}
      className={`h-[30px] m-auto  border border-solid border-darkGreen flex justify-center items-center rounded-[10px] ${buttonClassName}`}
    >
      <h2 className={`text-xs uppercase font-normal  ${titleButtomClasses}`}>{titleButtom}</h2>
    </button>
  );
}
