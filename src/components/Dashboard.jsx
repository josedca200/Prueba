import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Dashboard() {
  const navigate = useNavigate()
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    const session = localStorage.getItem('session')
    if (!session) navigate('/login')
  }, [navigate])

  const handleAdd = (t) => {
    const updated = [...transactions, t]
    setTransactions(updated)
    localStorage.setItem('transactions', JSON.stringify(updated))
  }

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id)
    setTransactions(updated)
    localStorage.setItem('transactions', JSON.stringify(updated))
  }

  const handleLogout = () => {
    localStorage.removeItem('session')
    navigate('/login')
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tus transacciones</h2>
        <button className="text-primary-600" onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList items={transactions} onDelete={handleDelete} />
    </div>
  )
}
