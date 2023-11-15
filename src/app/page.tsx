import BoxTitle from '@/commons/BoxTitle'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
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
