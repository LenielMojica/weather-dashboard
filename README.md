<div align="center">

# 🌤️ Weather Dashboard

A weather app built with React and Vite to practice component-based thinking and API integration.
I wanted to build something that actually felt useful — not just a box with a temperature number.

![preview](./assets/preview.png)

</div>

---

## ✨ Features

- 🔍 Search any city and get real-time weather data
- 📅 5-day forecast with min/max temperatures
- 📊 Temperature trend chart powered by Recharts
- 🌫️ Air Quality Index with pollutant breakdown (O3, NO2, PM2.5, PM10, CO, SO2) color-coded by severity
- 🌧️ Rain probability per day
- 🌅 Sunrise & sunset times
- 💧 Detailed metrics: humidity, wind speed, pressure, visibility, UV index

---

## 🛠️ Tech Stack

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40"/>
</p>

- **React + Vite**
- **Tailwind CSS**
- **Recharts**
- **OpenWeatherMap API** — current weather, forecast, air pollution, UV index

---

## 🚀 Getting Started

```bash
git clone https://github.com/LenielMojica/weather-dashboard
cd weather-dashboard
npm install
```

Create a `.env` file in the root:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

Then run:

```bash
npm run dev
```

> Get a free API key at [openweathermap.org](https://openweathermap.org/api)
