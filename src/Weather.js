import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState('');
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [image, setImage] = useState('');

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=t663e08fb6a44fe2c0f4395oce03be20&units=metric`;

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(url).then(showWeather);
    }

    function changeCity(event) {
        setCity(event.target.value);
    }

    function showWeather(response) {
        setTemperature(Math.round(response.data.temperature.current));
        setDescription(response.data.condition.description);
        setHumidity(response.data.temperature.humidity);
        setWind(response.data.wind.speed);
        setImage(response.data.condition.icon_url);
    }

    if (temperature) {
        return (
            <div className="SearchEngine">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Enter a city" onChange={changeCity} />
                    <input type="submit" value="Search" />
                </form>
                <ul>
                    <li>Temperature: {temperature}°C</li>
                    <li>Description: {description}</li>
                    <li>Humidity: {humidity}%</li>
                    <li>Wind: {wind}km/h</li>
                    <li>
                        <img src={image} alt="weather-icon" />
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="SearchEngine">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Enter a city" onChange={changeCity} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}
