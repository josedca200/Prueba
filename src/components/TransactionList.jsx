export default function TransactionList({ items, onDelete }) {
  if (items.length === 0) return <p className="mt-4">Sin transacciones</p>

  return (
    <table className="w-full mt-4 border text-left">
      <thead>
        <tr className="bg-primary-100">
          <th className="p-2">Descripción</th>
          <th className="p-2">Monto</th>
          <th className="p-2">Categoría</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((t) => (
          <tr key={t.id} className="border-t">
            <td className="p-2">{t.desc}</td>
            <td className="p-2">{t.amount.toFixed(2)}</td>
            <td className="p-2">{t.category}</td>
            <td className="p-2">
              <button
                className="text-red-600"
                onClick={() => onDelete(t.id)}
                aria-label={`Eliminar ${t.desc}`}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
