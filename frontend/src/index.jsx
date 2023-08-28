import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Forecast from './Forecast'
require('dotenv').config()



const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async (latitude, longitude) => {
  try {
    const response = await fetch(`${baseURL}/api/weather?latitude=${latitude}&longitude=${longitude}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

const getForecastFromAPI = async (latitude, longitude) => {
  try {
    const response = await fetch(`${baseURL}/api/forecast?latitude=${latitude}&longitude=${longitude}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

function Weather() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {s
    navigator.geolocation.getCurrentPosition((position) => {
      const lattitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherFromApi(lattitude, longitude).then((response) => {
        setWeather(response)
       });
      getForecastFromAPI(lattitude, longitude).then((response) => {
        setForecast(response)
      })
    });
  },[]);
  
    const weatherIcon = weather?.icon?.slice(0, -1);

    const UpcomingForecast = forecast
    .map((forecast) => <Forecast key={forecast.dt} forecast={forecast} />);



    return (
      <div className='weather'>
      <div className="weatherIcon">
        { weatherIcon && <img src={`/img/${weatherIcon}.svg`} /> }
      </div>
      <div className='forecast'>
        {UpcomingForecast}
      </div>
      </div>    
    );
  }

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
