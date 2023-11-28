import { IconsInterface } from '../interfaces/IconsInterface';

export function EyeOpen({ width, height, color }: IconsInterface) {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 6.22981C8.60769 6.08484 9.27363 6 10 6C12.7879 6 14.6854 7.24978 15.8167 8.35217C16.3834 8.90426 16.6667 9.18031 16.6667 10C16.6667 10.8197 16.3834 11.0957 15.8167 11.6478C14.6854 12.7502 12.7879 14 10 14C7.21209 14 5.31465 12.7502 4.18327 11.6478C3.61665 11.0957 3.33334 10.8197 3.33334 10C3.33334 9.18031 3.61665 8.90426 4.18327 8.35217C4.50409 8.03957 4.8865 7.71513 5.33334 7.41069"
        stroke="#24424D"
        strokeLinecap="round"
      />
      <path
        d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
        stroke="#24424D"
      />
    </svg>
  );
}
