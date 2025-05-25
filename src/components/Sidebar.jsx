import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [financeOpen, setFinanceOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const toggleSidebar = () => setOpen(!open)
  const handleSelect = (item) => {
    setSelected(item)
    setOpen(false)
  }

  return (
    <>
      <button
        aria-label="Menú"
        className="fixed top-2 left-2 z-20 p-2 bg-white border rounded md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white shadow-lg p-4 space-y-2 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => handleSelect('diferencial')}
              className={`block w-full text-left p-2 rounded ${selected === 'diferencial' ? 'bg-blue-100 border-l-4 border-blue-500' : ''}`}
            >
              Calculadora de diferencial cambiario
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelect('inventario')}
              className={`block w-full text-left p-2 rounded ${selected === 'inventario' ? 'bg-blue-100 border-l-4 border-blue-500' : ''}`}
            >
              Inventario
            </button>
          </li>
          <li>
            <button
              onClick={() => setFinanceOpen(!financeOpen)}
              className="flex items-center justify-between w-full p-2 rounded"
            >
              <span className={selected.startsWith('finanzas') ? 'font-bold' : ''}>Finanzas</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${financeOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {financeOpen && (
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <button
                    onClick={() => handleSelect('finanzas-ingresos')}
                    className={`block w-full text-left p-2 rounded ${selected === 'finanzas-ingresos' ? 'bg-blue-100 border-l-4 border-blue-500' : ''}`}
                  >
                    Ingresos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSelect('finanzas-egresos')}
                    className={`block w-full text-left p-2 rounded ${selected === 'finanzas-egresos' ? 'bg-blue-100 border-l-4 border-blue-500' : ''}`}
                  >
                    Egresos
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>
    </>
  )
}
