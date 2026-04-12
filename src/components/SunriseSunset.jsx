const SunriseSunset = ({ amanecer, atardecer }) => {
  return (
    <div className="col-span-3 bg-gray-800 rounded-2xl p-5 flex flex-col justify-center gap-6">
      <h3 className="font-bold text-lg">Sunset & Sunrise</h3>

      <div className="flex items-center gap-4">
        <span className="text-4xl">🌅</span>
        <div>
          <p className="text-gray-400 text-sm">Sunrise</p>
          <p className="text-xl font-bold">{amanecer}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl">🌇</span>
        <div>
          <p className="text-gray-400 text-sm">Sunset</p>
          <p className="text-xl font-bold">{atardecer}</p>
        </div>
      </div>
    </div>
  )
}

export default SunriseSunset