import { useState } from 'react'

export default function Differential() {
  const [amount, setAmount] = useState('')
  const [rateOld, setRateOld] = useState('')
  const [rateNew, setRateNew] = useState('')
  const diff = amount && rateOld && rateNew ? (amount * (rateNew - rateOld)).toFixed(2) : null

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Calculadora de diferencial cambiario</h2>
      <form className="space-y-2">
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
          placeholder="Tasa anterior"
          type="number"
          step="0.0001"
          value={rateOld}
          onChange={(e) => setRateOld(e.target.value)}
          required
        />
        <input
          className="w-full border p-2"
          placeholder="Tasa nueva"
          type="number"
          step="0.0001"
          value={rateNew}
          onChange={(e) => setRateNew(e.target.value)}
          required
        />
      </form>
      {diff !== null && <p className="mt-4">Diferencia: {diff}</p>}
    </div>
  )
}
