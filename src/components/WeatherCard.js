import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WeatherCard = ({weatherData}) => { 
    return (
    <div className='card'>
        <div cardNmae='card-body'>
        <h1 className='card-title'>{weatherData.name}</h1>
        <p> Tempreture: {Math.round(weatherData.main.temp)}°C</p>
        {/* <p> Humidity: {weatherData} %</p> */}
        <p> Description: {weatherData.weather[0].description}</p>
         
        </div>
     <div>
        <a href={`https://github.com/Taltos87/my-weather-app`} >Open Source Code</a> 
        <p> by Ana-Maria Paraschivu </p>
        
        </div>   
    </div>
    );
};
export default WeatherCard;