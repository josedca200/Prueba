import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    const session = localStorage.getItem('session')
    if (!session) navigate('/login')
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('session')
    navigate('/login')
  }

  return (
    <div className="flex h-screen">
      <aside className="w-48 bg-white shadow p-4 space-y-2">
        <nav className="space-y-1">
          <Link className="block" to="/app/diferencial">Diferencial cambiario</Link>
          <Link className="block" to="/app/finanzas">Finanzas</Link>
          <Link className="block" to="/app/inventario">Inventario</Link>
          <button className="text-red-600 mt-4" onClick={handleLogout}>Cerrar sesión</button>
        </nav>
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
