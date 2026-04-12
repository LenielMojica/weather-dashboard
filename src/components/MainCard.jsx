const MainCard = ({ ciudad, temperatura, descripcion, ciudades, ultimaActualizacion, onCiudadClick }) => {
  return (
    <div className="col-span-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl p-5 flex flex-col justify-between min-h-64">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <span className="font-bold text-lg flex items-center gap-1">
          📍 {ciudad}
        </span>
        <span className="text-xs text-orange-100">
          Last Updated {ultimaActualizacion}
        </span>
      </div>

      {/* Temperatura principal */}
      <div className="my-4">
        <span className="text-5xl">⛅</span>
        <p className="text-6xl font-extrabold mt-2">{temperatura}°C</p>
        <p className="text-orange-100 mt-1">{descripcion}</p>
      </div>

      {/* Ciudades guardadas */}
      <div className="flex gap-2">
        {ciudades.map((c, i) => (
          <button
            key={i}
            onClick={() => onCiudadClick(c)}
            className={`rounded-xl px-3 py-2 text-xs text-center flex-1 transition-all ${
              c.activa
                ? "bg-orange-200 text-orange-900 font-bold"
                : "bg-orange-400/40 hover:bg-orange-400/60"
            }`}
          >
            <p>{c.temp}°C</p>
            <p>{c.nombre}</p>
          </button>
        ))}
      </div>

    </div>
  )
}

export default MainCard