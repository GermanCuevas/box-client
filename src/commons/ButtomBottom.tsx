import React from 'react';
interface buttom {
  titleButtom?: string;
  titleButtomClasses?: string;
  buttonClassName?: string;
  typeButton?: boolean;
  icon?: React.ReactNode;
  handleButton?: () => void;
}

export default function ButtomBottom({
  typeButton = false,
  handleButton,
  titleButtom,
  icon,
  titleButtomClasses,
  buttonClassName
}: buttom) {
  return (
    <button
      type={typeButton ? 'submit' : 'button'}
      onClick={handleButton}
      className={`h-[30px] m-auto  border border-solid border-darkGreen flex justify-center items-center rounded-[10px] ${buttonClassName}`}
    >
      <h2 className={`text-xs uppercase font-normal  ${titleButtomClasses}`}>
        <span className="flex items-center gap-2">
          {titleButtom} {icon}
        </span>
      </h2>
    </button>
  );
}
