import BoxTitle from '@/commons/BoxTitle'
/* import PackageDetails from '@/commons/PackageDetails' */

export default function Home() {
  return (
    <main>
      <h1>HOLA MUNDO!</h1>
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
