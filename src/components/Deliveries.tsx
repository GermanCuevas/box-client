import React from 'react'
//icon
import { ChevronDownSmall } from '@/commons/Icons'
//commons
import LemmonButton from '@/commons/LemmonButton'
import PackageDetailsList from '@/commons/PackageDetailsList'

interface data {
  packageID?: string
  direction?: string
  location?: string
  status?: 'in course' | 'pending' | 'delivered'
}

interface deliveries {
  lemmonTitle?: string
  data?: Array<object>
}

export default function Deliveries({ lemmonTitle = 'repartos pendientes', data }: deliveries) {
  return (
    <section className={'w-[300px] min-h-[100px] rounded-[15px] m-auto  bg-white'}>
      <LemmonButton height={'h-[43px]'} title={lemmonTitle} icon={<ChevronDownSmall />} />

      <ul className={'w-full h-fit flex flex-col  items-center'}>
        {data?.map(({ packageID, location, status, direction }: data, index: number, array) => {
          const lastElement = index === array.length - 1

          return (
            <>
              <PackageDetailsList
                status={status}
                location={location}
                direction={direction}
                packageID={packageID}
              />
              {!lastElement && <div className={'w-[275px] border-b-[.1px] border-b-darkGreen '} />}
            </>
          )
        })}
      </ul>
    </section>
  )
}
