import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

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
    <>
      <Sidebar />
      <div className="p-4 md:ml-64">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Inicio</h2>
            <button className="text-primary-600" onClick={handleLogout}>Cerrar sesión</button>
          </div>
          <p>Selecciona una opción del menú para comenzar.</p>
        </div>
      </div>
    </>
  )
}
