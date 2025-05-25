import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

async function hashPassword(password) {
  const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
}

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '{}')
    if (users[email]) {
      setError('El usuario ya existe')
      return
    }
    users[email] = await hashPassword(password)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('session', email)
    navigate('/app')
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      {error && <p className="text-red-500 mb-2" role="alert">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1" htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            className="w-full border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className="w-full border p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded" type="submit">Crear cuenta</button>
      </form>
      <p className="mt-4">
        ¿Ya tienes cuenta? <Link className="text-primary-600" to="/login">Inicia sesión</Link>
      </p>
    </div>
  )
}
