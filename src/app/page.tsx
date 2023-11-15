import BoxTitle from '@/commons/BoxTitle'
import Header from '@/components/Header'
/* import PackageDetails from '@/commons/PackageDetails' */

export default function Home() {
  return (
    <main className="bg-lightGreen h-screen">
      <Header />
      <BoxTitle
        dateBox="mie /03"
        titleBox="enero"
        boxClasses={'justify-around gap-x-2'}
        titleBoxClasses={'uppercase'}
        dateBoxClasses={'uppercase'}
      />
    </main>
  )
}
