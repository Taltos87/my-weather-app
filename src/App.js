import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.js';
import WeatherCard from './components/WeatherCard.js';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = "2bcda0ef514ca396d716955408357744";


 function App() 
 {
  
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

 useEffect(() => { 
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoords(latitude, longitude);
        },
    (error) => { console.log(error);
      setError('Failed to get your location.');
    }
    ); 
  
  } else {
    setError('Geolocation is not supported by this browser');
  }
}, []);
  async function fetchWeatherDataByCoords(latitude, longitude) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=2bcda0ef514ca396d716955408357744&units=metric`);
      if (!response.ok)
       { throw new Error('Something went wrong!'); }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('Fetching data failed!');
    };

  }
  
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit  = async (event) => {
    event.preventDefault();


  try {const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);


  if (!response.ok) 
  {throw new Error('City not found');}
     
  const data = await response.json();
  setWeatherData(data);
  setError('');
  } catch (error) {
    setWeatherData({});
    setError('City not found');
  } 
  };
  return (
    <div className="App">
      <h2 className=''>React Weather App</h2>
      <p className=''>Local Time: {moment().format('LLLL')} </p>
      <Form 
      city={city}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      />
      {error && <p className=''>{error}</p>}
      {weatherData && weatherData.main && <WeatherCard weatherData={weatherData} />}
    </div>
  );
  
};
export default App;