const RainChances = ({ pronostico }) => {
  return (
    <div className="col-span-3 bg-gray-800 rounded-2xl p-5">
      <h3 className="font-bold text-lg mb-4">Chances of Rain</h3>

      <div className="flex flex-col gap-3">
        {pronostico.map((dia, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-8">{dia.nombre}</span>
            <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${dia.lluvia}%` }}
              />
            </div>
            <span className="text-xs w-12 text-right">{dia.lluvia}%</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RainChances