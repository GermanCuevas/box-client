import ButtomBottom from '@/commons/ButtomBottom'

import Deliveries from '@/components/Deliveries'
import Header from '@/components/Header'

const fakeDataPendings = [
  {
    packageID: '#0A235',
    direction: 'Amenabar 2356',
    location: 'CABA',
    status: 'in course'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'pending'
  }
]
const fakeDataHistory = [
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  },
  {
    packageID: '#0G370',
    direction: 'Heredia 785',
    location: 'CABA',
    status: 'delivered'
  }
]

export default function Home() {
  return (
    <main className="bg-lightGreen h-[100vh] flex flex-col justify-between pt-5">
      <Header />
      <div className="h-[80%] mt-4 w-full flex flex-col justify-evenly">
        <div className="h-[40%] ">
          <Deliveries data={fakeDataPendings} />
        </div>
        <div className="h-[55%] ">
          <Deliveries
            lemmonTitle={'historial de repartos'}
            deliveryType={'history'}
            data={fakeDataHistory}
          />
        </div>
      </div>
      <ButtomBottom
        buttonClassName={'bg-darkGreen w-[270px]'}
        titleButtomClasses={'text-lemonGreen'}
        titleButtom="obtener paquetes"
      />
    </main>
  )
}
