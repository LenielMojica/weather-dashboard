// components/SearchBar.jsx
import { useState } from 'react'
const SearchBar = ({ onBuscar }) => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (!input.trim()) return
    onBuscar(input.trim())
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="col-span-12 flex gap-2 mb-1">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar ciudad..."
        className="flex-1 bg-gray-800 text-white rounded-xl px-4 py-2 outline-none border border-gray-700 focus:border-orange-500 transition-all"
      />
      <button
        onClick={handleSubmit}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-xl transition-all"
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar