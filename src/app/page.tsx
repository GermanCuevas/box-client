import LogoutButton from '@/commons/LogoutButton'
import PackageDetails from '@/commons/PackageDetails'

export default function Home() {
  return (
    <main>
      <PackageDetails />
      <LogoutButton text="CERRAR SESIÓN" classNameButton="px-4 py-2" />
    </main>
  )
}
