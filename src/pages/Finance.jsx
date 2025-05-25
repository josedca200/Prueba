import { useState } from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'

export default function Finance() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })

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

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Finanzas</h2>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList items={transactions} onDelete={handleDelete} />
    </div>
  )
}
