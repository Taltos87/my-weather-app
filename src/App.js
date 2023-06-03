import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.js';
import WeatherCard from './components/WeatherCard.js';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = "2bcda0ef514ca396d716955408357744";


function App() {
  
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({null});
    const [error, setError] = useState('');

 useEffect(() => { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;},
      (error) => {console.log(error);});
      feachWeatherDatabyCoords(latitude, longitude);}, {
        timeout: 20000, else {setError('Geolocation is not supported by this browser.');}
      }

  async function feachWeatherDatabyCoords(latitude, longitude) {
     try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=2bcda0ef514ca396d716955408357744&units=metric`);
       if (!response.ok) {throw new Error('Something went wrong!');}

       const data = await response.json();
       setWeatherData(data);
       setError('');
     } catch (error) {
       setWeatjerData(null);
       setError('Fetching data failed!');
     };

   }
  }, []);

  function handleInputChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  



  return (
    <div className="App">
      <h2 className=''>React Weather App</h2>
      <p className=''>Local Time</p>
      <Form 
      city={city}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      />
      {weatherData.main && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;