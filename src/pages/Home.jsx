import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-4 space-y-2">
      <Link
        className="bg-primary-600 text-white px-4 py-2 rounded block text-center"
        to="/app/diferencial"
      >
        Diferencial cambiario
      </Link>
      <Link
        className="bg-primary-600 text-white px-4 py-2 rounded block text-center"
        to="/app/finanzas"
      >
        Finanzas
      </Link>
      <Link
        className="bg-primary-600 text-white px-4 py-2 rounded block text-center"
        to="/app/inventario"
      >
        Inventario
      </Link>
    </div>
  )
}
