import React from 'react'
import { ArrowBack } from './Icons'
import { saira } from '../../public/fonts/fonts'

interface LemmonButtonProps {
  height?: string
  width?: string
  icon?: any
  title?: string
  subtitle?: string
  tracking?: string
}

const LemmonButton: React.FC<LemmonButtonProps> = ({
  height = 'h-[40px]',
  width = 'w-[300px]',
  icon = <ArrowBack />,
  title = 'repartos pendientes',
  subtitle = null,
  tracking = 'tracking-[.5px]'
}) => {
  return (
    <button
      type="button"
      className={`bg-lemonGreen flex justify-between items-center rounded-[15px] pl-5 pr-5 max-w-[300px] ${height} ${width}`}
    >

      <figcaption
        className={`text-start flex flex-col justify-center  ${saira.className} antialiased h-full text-darkGreen `}
      >
        <h3 className={'font-bold leading-4 tracking-[1.5px] text-start text-lg uppercase '}>


      <figcaption className="text-start flex flex-col justify-center  font-Saira h-full text-darkGreen ">
        <h3 className={`font-bold leading-4  ${tracking} text-start text-lg uppercase`}>
          {title}
        </h3>
        {subtitle && <h5 className="lowercase tracking-wide text-xs font-thin">{subtitle}</h5>}
      </figcaption>
      <figure className={subtitle ? '-rotate-90' : ''}>{icon}</figure>
    </button>
  )
}
export default LemmonButton
