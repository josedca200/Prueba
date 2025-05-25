import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Home from './pages/Home'
import Differential from './pages/Differential'
import Finance from './pages/Finance'
import Inventory from './pages/Inventory'
import './App.css'

export default function App() {
  const session = localStorage.getItem('session')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={session ? '/app' : '/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="diferencial" element={<Differential />} />
          <Route path="finanzas" element={<Finance />} />
          <Route path="inventario" element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
