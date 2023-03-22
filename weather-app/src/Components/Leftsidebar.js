import React, { useState, useEffect } from 'react'

export default function Leftsidebar({ city }) {

    const [weatherIcon, setweatherIcon] = useState("");

    useEffect(() => {
        if (city.weathermood) {
            switch (city.weathermood) {
                case "Clouds":
                    setweatherIcon("wi-day-cloudy");
                    break;
                case "Haze":
                    setweatherIcon("wi-fog");
                    break;
                case "Clear":
                    setweatherIcon("wi-day-sunny");
                    break;
                default:
                    setweatherIcon("wi-day-sunny");
                    break;
            }
        }
    }, [city.weathermood]);

    const getDay = () => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()];
    }

    return (
        <div className="w-1/2 py-6 px-8 pr-24 bg-indigo-600 rounded-l">
            <h1 className="text-3xl font-medium">{getDay()}</h1>
            <h2>{new Date().toLocaleDateString()}</h2>
            <h2 className="mt-2"><i className="fas fa-map-marker-alt"></i> {city.name}, {city.country}</h2>

            <div className="flex flex-col mt-20">
                <i className={`wi ${weatherIcon} text-5xl`}></i>
                <span className="text-4xl font-bold mt-5">{city.temp}°C</span>
                <p className="font-medium text-lg">{city.weathermood}</p>
            </div>
        </div>
    )
}
