interface check {
  width?: string
  height?: string
  color?: string
  classNameCheck?: string
}

export function CheckOK({ width, height, color, classNameCheck }: check) {
  return (
    //bg-[#CEF169] rounded-full
    <div className={classNameCheck}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || '24'}
        height={height || '24'}
        viewBox="0 0 24 24"
        fill={color || 'rgba(0, 0, 0, 1)'}
        transform=""
      >
        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
      </svg>
    </div>
  )
}
export function CheckOff({ classNameCheck }: check) {
  //border-darkGreen border-[3px] w-[30px] h-[30px]
  return <div className={`rounded-full ${classNameCheck}`}></div>
}
