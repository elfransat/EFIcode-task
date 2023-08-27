import React from 'react';

function Forecast({ forecast }) {
  const upcomingForecast = forecast.weather.map((weather) => (
    <div key={weather.id}>
      <img src={`/img/${weather.icon.slice(0, -1)}.svg`} alt="weatherIcon" />
      <p>
        {weather.main}
      </p>
    </div>
  ));

  return (
    <div>
      {upcomingForecast}
      <div>
        <p>
          {forecast.dt_txt}
        </p>
      </div>
    </div>
  );
}

export default Forecast;