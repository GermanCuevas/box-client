import React from 'react'
import { ArrowBack } from './Icons'
import { saira } from '../../public/fonts/fonts'

interface LemmonButtonProps {
  height?: string
  width?: string
  icon?: any
  title?: string
  subtitle?: string
}

const LemmonButton: React.FC<LemmonButtonProps> = ({
  height = '48px',
  width = '300px',
  icon = <ArrowBack />,
  title = 'repartos pendientes',
  subtitle = null
}) => {
  const styles = {
    height,
    width
  }

  return (
    <button
      type="button"
      style={styles}
      className={'bg-lemonGreen flex justify-between items-center rounded-[15px] pl-5 pr-5'}
    >
      <figcaption
        className={`text-start flex flex-col justify-center  ${saira.className} antialiased h-full text-darkGreen `}
      >
        <h3 className={'font-bold leading-4 tracking-[1.5px] text-start text-lg uppercase '}>
          {title}
        </h3>
        {subtitle && <h5 className="lowercase tracking-wide text-xs font-thin">{subtitle}</h5>}
      </figcaption>
      <figure className={subtitle ? '-rotate-90' : ''}>{icon}</figure>
    </button>
  )
}
export default LemmonButton
