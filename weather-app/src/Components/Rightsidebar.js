import React, { useState } from 'react'

export default function Rightsidebar({ dailyWeatherData, fetchWeather, city }) {

  const [searchVal, setSearchVal] = useState("Pune");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(searchVal);
  }

  const getDay = (dt) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[new Date(dt * 1000).getDay()];
  }

  return (
    <div className="w-3/4 p-6">

      <form className="rounded-full border flex border-gray-700 group" onSubmit={(e) => handleSubmit(e)}>
        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className="group-hover:border-blue-800 outline-none p-2 bg-transparent rounded-full flex-1" type="text" placeholder="Search.." name="city" />
        <button type="submit" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-full">Search</button>
      </form>

      <div className="flex flex-col gap-3 mt-4">
        <h3 className="flex justify-between items-center font-medium">PRESSURE <span>{city.pressure} hPa</span></h3>
        <h3 className="flex justify-between items-center font-medium">HUMIDITY <span>{city.humidity} %</span></h3>
        <h3 className="flex justify-between items-center font-medium">WIND <span>{Math.floor(city.speed * 3.6)} km/h</span></h3>
      </div>

      <div className="flex bg-gray-700 my-6 gap-2 rounded-lg h-32">
        <div className="flex bg-white rounded-lg p-5 text-black flex-col items-center gap-2">
          {/* <i className="wi wi-day-sunny text-3xl"></i> */}
          <span className="font-medium">{getDay(city.dt)}</span>
          <span>{Math.floor(city.temp)}°C</span>
          <span>{city.weathermood}</span>
        </div>

        {

          (!dailyWeatherData.daily) ? "" :

            dailyWeatherData.daily.filter((e, index) => index > 0 && index < 5)
              .map((elem, i) => {

                return (
                  <div className="flex flex-col p-5 items-center gap-2" key={i}>
                    {/* <i className="wi wi-day-sunny text-3xl"></i> */}
                    <span className="font-medium">{getDay(elem.dt)}</span>
                    <span>{Math.floor(elem.temp.day)}°C</span>
                    <span>{elem.weather[0].main}</span>
                  </div>
                )
              })

        }

      </div>

      {/* <button className="px-6 py-2 bg-blue-600 rounded-full">Change Location</button> */}
    </div>
  )
}
