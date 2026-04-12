const MetricCard = ({ icono, label, valor }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4">
      <p className="text-gray-400 text-xs flex items-center gap-1">
        {icono} {label}
      </p>
      <p className="text-2xl font-bold mt-2">{valor}</p>
    </div>
  )
}

export default MetricCard