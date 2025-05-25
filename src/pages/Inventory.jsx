import { useState } from 'react'

export default function Inventory() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('inventory')
    return saved ? JSON.parse(saved) : []
  })
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price)
    }
    const updated = [...items, newItem]
    setItems(updated)
    localStorage.setItem('inventory', JSON.stringify(updated))
    setName('')
    setQuantity('')
    setPrice('')
  }

  const handleDelete = (id) => {
    const updated = items.filter((i) => i.id !== id)
    setItems(updated)
    localStorage.setItem('inventory', JSON.stringify(updated))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Inventario</h2>
      <form onSubmit={handleAdd} className="space-y-2">
        <input
          className="w-full border p-2"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full border p-2"
          placeholder="Cantidad"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          className="w-full border p-2"
          placeholder="Precio"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className="bg-primary-600 text-white px-4 py-2 rounded" type="submit">Agregar</button>
      </form>
      {items.length === 0 ? (
        <p className="mt-4">Sin productos</p>
      ) : (
        <table className="w-full mt-4 border text-left">
          <thead>
            <tr className="bg-primary-100">
              <th className="p-2">Nombre</th>
              <th className="p-2">Cantidad</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id} className="border-t">
                <td className="p-2">{i.name}</td>
                <td className="p-2">{i.quantity}</td>
                <td className="p-2">{i.price.toFixed(2)}</td>
                <td className="p-2">
                  <button className="text-red-600" onClick={() => handleDelete(i.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
