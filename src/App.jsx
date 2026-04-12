import { useState, useEffect } from 'react'
import MainCard from './components/MainCard'
import WeekForecast from './components/WeekForecast'
import MetricCard from './components/MetricCard'
import ForecastChart from './components/ForecastChart'
import SunriseSunset from './components/SunriseSunset'
import AirQuality from './components/AirQuality'
import RainChances from './components/RainChances'
import SearchBar from './components/SearchBar'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const formatHora = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit'
  })
}

const formatFecha = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' })
}

const App = () => {
  const [ciudad, setCiudad] = useState('Santo Domingo')
  const [clima, setClima] = useState(null)
  const [pronostico, setPronostico] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [uvIndex, setUvIndex] = useState(null)

 const fetchClima = async (nombreCiudad) => {
  try {
    setCargando(true)
    setError(null)

    const resClima = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${API_KEY}&units=metric`
    )
    const dataClima = await resClima.json()

    if (dataClima.cod !== 200) {
      setError('Ciudad no encontrada')
      return
    }

    const resPron = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${nombreCiudad}&appid=${API_KEY}&units=metric`
    )
    const dataPron = await resPron.json()

    const resUV = await fetch(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${dataClima.coord.lat}&lon=${dataClima.coord.lon}&appid=${API_KEY}`
    )
    const dataUV = await resUV.json()

    const diasUnicos = dataPron.list
      .reduce((acc, item) => {
        const fecha = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })
        const existing = acc.find(d => d.nombre === fecha)
        if (!existing) {
          acc.push({
            nombre: fecha,
            temp: Math.round(item.main.temp),
            tempMin: Math.round(item.main.temp_min),
            tempMax: Math.round(item.main.temp_max),
            icono: item.weather[0].main === 'Rain' ? '🌧️' : item.weather[0].main === 'Clouds' ? '⛅' : '🌤️',
            lluvia: Math.round((item.pop || 0) * 100),
          })
        } else {
          existing.tempMin = Math.min(existing.tempMin, Math.round(item.main.temp_min))
          existing.tempMax = Math.max(existing.tempMax, Math.round(item.main.temp_max))
        }
        return acc
      }, [])
      .slice(0, 5)

    setClima(dataClima)
    setCiudad(dataClima.name)
    setPronostico(diasUnicos)
    setUvIndex(dataUV.value ?? '—')

  } catch (e) {
    setError('Error al obtener el clima')
  } finally {
    setCargando(false)
  }
}

  useEffect(() => {
    fetchClima(ciudad)
  }, [])

  if (cargando) return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <p className="text-xl animate-pulse">Cargando clima...</p>
    </div>
  )

  {error && (
  <div className="col-span-12 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-3 rounded-xl">
    ⚠️ {error} — se mantienen los datos de la última ciudad encontrada.
  </div>
)}

  const metricas = [
  { icono: "💧", label: "Humidity",         valor: clima.main?.humidity ?? '—' },
  { icono: "👁️", label: "Visibility",       valor: clima.visibility ? (clima.visibility / 1000).toFixed(1) : '—' },
  { icono: "💨", label: "Wind speed (kph)", valor: clima.wind?.speed ? Math.round(clima.wind.speed * 3.6) : '—' },
  { icono: "🌧️", label: "Precipitation",    valor: clima.rain?.['1h'] ?? clima.rain?.['3h'] ?? 0 },
  { icono: "🌡️", label: "Pressure",         valor: clima.main?.pressure ?? '—' },
  { icono: "☀️", label: "UV Index",         valor: uvIndex ?? '—' },
]


  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="grid grid-cols-12 gap-3 max-w-7xl mx-auto">
<SearchBar onBuscar={(ciudad) => fetchClima(ciudad)} />
        <MainCard
          ciudad={clima.name}
          temperatura={Math.round(clima.main.temp)}
          descripcion={clima.weather[0].description}
          ultimaActualizacion={new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
          ciudades={[]}
          onCiudadClick={(c) => fetchClima(c.nombre)}
        />

        <WeekForecast pronostico={pronostico} />

        <div className="col-span-3 grid grid-cols-2 gap-2">
          {metricas.map((m, i) => (
            <MetricCard key={i} icono={m.icono} label={m.label} valor={m.valor} />
          ))}
        </div>

        <ForecastChart pronostico={pronostico} />

        <SunriseSunset
          amanecer={formatHora(clima.sys.sunrise)}
          atardecer={formatHora(clima.sys.sunset)}
        />

        <AirQuality
          aqi={9}
          categoria="Good"
          mensaje="Air is clean and healthy"
          contaminantes={[]}
        />

        <RainChances pronostico={pronostico} />

      </div>
    </div>
  )
}

export default App