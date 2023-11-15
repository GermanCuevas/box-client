import LemmonButton from '@/commons/LemmonButton'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1>HOLA MUNDO!</h1>
      <LemmonButton height={'43px'} width={'300px'} pathIcon={'/icons/chevron-down.svg'} />
    </main>
  )
}
