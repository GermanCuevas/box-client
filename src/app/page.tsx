import BoxTitle from '@/commons/BoxTitle'
import Input from '@/commons/Input'

export default function Home() {
  return (
    <main>
      {/* <main className="flex flex-col items-center"> */}
      <h1>HOLA MUNDO!</h1>
      <Input placeholder="Nombre" type="text" />
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
