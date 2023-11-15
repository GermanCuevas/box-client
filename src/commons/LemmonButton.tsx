import React from 'react'
import Image from 'next/image'

interface LemmonButtonProps {
  height?: string
  width?: string
  pathIcon?: string
  text?: string
}

const LemmonButton: React.FC<LemmonButtonProps> = ({
  height = '40px',
  width = '300px',
  pathIcon = '/icons/chevron-down.svg',
  text = 'repartos pendientes'
}) => {
  const styles = {
    height,
    width
  }

  return (
    <button type="button" style={styles} className={'bg-lemonGreen rounded-[15px] relative pl-5'}>
      <Image
        className={'right-2 absolute top-[0.4rem]'}
        width={30}
        height={30}
        alt="icon"
        src={`${pathIcon}`}
      />

      <h3 className={'text-darkGreen font-Saira font-bold tracking-[1.5px] text-start text-lg'}>
        {text.toLocaleUpperCase()}
      </h3>
    </button>
  )
}
export default LemmonButton
