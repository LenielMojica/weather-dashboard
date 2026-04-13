const AirQuality = ({ aqi, categoria, mensaje, contaminantes }) => {
  const colorAqi = {
    Good: "border-green-500",
    Fair: "border-yellow-500",
    Unhealthy: "BORDER-red-500",
    Poor: "border-red-500",
    "Very Poor": "border-purple-500", 
  }
 console.log('categoria:', categoria) // 👈 agrega esto
  console.log('aqi:', aqi)
  const colorPunto = {
    Good: "bg-green-500",
    Moderate: "bg-yellow-500",
    Unhealthy: "bg-red-500",
    "Very Poor": "bg-purple-500",
  }

  return (
    <div className="col-span-6 bg-gray-800 rounded-2xl p-5">
      <h3 className="font-bold text-lg mb-4">Air Quality Index</h3>

      <div className="flex gap-6 items-center">

        {/* Círculo AQI */}
        <div className={`w-36 h-36 rounded-full border-8 ${colorAqi[categoria]} flex flex-col items-center justify-center shrink-0`}>
          <p className="text-green-400 font-bold">{categoria}</p>
          <p className="text-3xl font-extrabold">{aqi}</p>
        </div>

        {/* Contaminantes */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 flex-1">
          {contaminantes.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full shrink-0 ${colorPunto[c.categoria]}`} />
              <div>
                <p className="text-xl font-bold">{c.valor}</p>
                <p className="text-xs text-gray-400">{c.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <p className="text-green-400 text-sm mt-4 text-center">{mensaje}</p>
    </div>
  )
}

export default  AirQuality