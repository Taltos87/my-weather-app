import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.js';
import WeatherCard from './components/WeatherCard.js';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {



  const [city, setCity] = useState('');
  // const [weatherData, setWeatherData] = useState({});
  // const [error, setError] = useState('');


  const handleInputChange = (event) => {
    setCity(event.target.value);}
  function handleSubmit(event) {
    event.preventDefault();
  }

  



  return (
    <div className="App">
      <Form 
      city={city}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      
      
      />
    </div>
  );
}

export default App;