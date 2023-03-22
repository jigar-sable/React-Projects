import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import Leftsidebar from './Components/Leftsidebar';
import Rightsidebar from './Components/Rightsidebar';

function App() {

  const [city, setCity] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});

  const fetchWeather = async (searchVal) => {
    try {
      let uri = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      await axios.get(uri)
        .then((res) => {
          // console.log(res.data);

          const { temp, humidity, pressure } = res.data.main;
          const { main: weathermood } = res.data.weather[0];
          const { name, dt } = res.data;
          const { lat, lon } = res.data.coord;
          const { speed } = res.data.wind;
          const { country, sunset } = res.data.sys;

          const weatherInfo = { temp, humidity, pressure, weathermood, name, speed, country, sunset, lat, lon, dt };

          setCity(weatherInfo);
          fetchDailyData(weatherInfo.lat, weatherInfo.lon);
        });

    } catch (error) {
      console.log(error);
      alert("No Results Found!");
    }

  }

  const fetchDailyData = async (lat, lon) => {
    try {
      let uri = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      await axios.get(uri)
        .then((res) => {
          // console.log(res.data);
          const { lat, lon, daily } = res.data;
          const newInfo = { lat, lon, daily }
          setDailyWeatherData(newInfo);
        });
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchWeather("Pune");
    fetchDailyData(18.5196, 73.8553);
  }, []);

  return (
    <div className="flex mx-auto bg-gray-800 rounded shadow">

      <Leftsidebar city={city} />

      <Rightsidebar dailyWeatherData={dailyWeatherData} fetchWeather={fetchWeather} city={city} />

    </div>
  );
}

export default App;
