import { useState } from 'react'

export default function TransactionForm({ onAdd }) {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ id: Date.now(), desc, amount: parseFloat(amount), category })
    setDesc('')
    setAmount('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="w-full border p-2"
        placeholder="Descripción"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        className="w-full border p-2"
        placeholder="Monto"
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        className="w-full border p-2"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button className="bg-primary-600 text-white px-3 py-1 rounded" type="submit">Agregar</button>
    </form>
  )
}
