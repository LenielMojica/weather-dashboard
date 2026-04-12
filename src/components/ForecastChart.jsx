import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const ForecastChart = ({ pronostico }) => {
  return (
    <div className="col-span-6 bg-gray-800 rounded-2xl p-5">
      <h3 className="font-bold text-lg mb-4">Forecast Weather</h3>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={pronostico}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="nombre"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={['auto', 'auto']}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
            labelStyle={{ color: '#f97316' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ fill: '#f97316', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ForecastChart