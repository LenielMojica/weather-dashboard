const WeekForecast = ({ pronostico }) => {
  return (
    <div className="col-span-9 grid grid-cols-5 gap-2">
      {pronostico.map((dia, i) => (
        <div
          key={i}
          className="bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center gap-1"
        >
          <span className="text-3xl">{dia.icono}</span>
          <span className="text-sm font-semibold">{dia.temp}°C</span>
          <div className="flex gap-2 text-xs mt-1">
            <span className="text-blue-400">{dia.tempMin}°</span>
            <span className="text-gray-500">/</span>
            <span className="text-orange-400">{dia.tempMax}°</span>
          </div>
          <span className="text-xs text-gray-400">{dia.nombre}</span>
        </div>
      ))}
    </div>
  )
}

export default WeekForecast