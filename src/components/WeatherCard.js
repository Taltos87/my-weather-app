import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const WeatherCard = ({weatherData}) => { 
    return (
    <div className='card'>
        <div cardNmae='card-body'>
        <h1 className='card-title'>{weatherData.name}</h1>
        <p> Tempreture: {Math.round(weatherData.main.temp)}°C</p>
        <p> Description: {weatherData.weather[0].description}</p>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='weather icon' />
        {/* <p> Humidity: {weatherData} %</p> */}
        <p> Wind Speed: {weatherData.wind.speed} km/h</p>
        <p> Humidity: {weatherData.main.humidity} %</p>
        <p> Clouds: {weatherData.clouds.all} %</p>
        <p> Date: {new Date(weatherData.dt * 1000).toLocaleDateString()}</p>
        <p> Time: {new Date(weatherData.dt * 1000).toLocaleTimeString()}</p>
        <p> Feels Like: {Math.round(weatherData.main.feels_like)}°C</p>
        <p> Min Temp: {Math.round(weatherData.main.temp_min)}°C</p>
        <p> Max Temp: {Math.round(weatherData.main.temp_max)}°C</p>
        <p> Pressure: {weatherData.main.pressure} hPa</p>
        <p> Visibility: {weatherData.visibility} m</p>
        <p> Geo Coordinates: {weatherData.coord.lat}°N, {weatherData.coord.lon}°E</p>
       </div>
     <div>
        <a href={`https://github.com/Taltos87/my-weather-app`} >Open Source Code</a> 
        <p> by Ana-Maria Paraschivu </p>
        
        </div>   
    </div>
    );
};
export default WeatherCard;