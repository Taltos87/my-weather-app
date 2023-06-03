import React, { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WeatherCard = ({weatherData}) => { 
    return (
    <div className='card'>
        <div cardNmae='card-body'>
        <h1 className='card-title'>{weatherData.name}</h1>
        <p cardNmae='card-text'> Tempreture: {weatherData} C</p>
        {/* <p> Humidity: {weatherData} %</p> */}
        <p cardNmae='card-text'> Description: {weatherData.weather[0].description}</p>

        </div>
    </div>
    );
};
export default WeatherCard;