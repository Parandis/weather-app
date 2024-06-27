import React, { useEffect, useState } from 'react';
import { getWeatherForecast } from '../services/weatherApi';
import '../App.scss';

interface Forecast {
  date: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherForecast: React.FC<{ city: string }> = ({ city }) => {
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchForecast = async () => {
          try {
              const data = await getWeatherForecast(city);
              const processedData = data.list.map((item: any) => ({
                  date: item.dt_txt,
                  temp: item.main.temp,
                  description: item.weather[0].description,
                  icon: item.weather[0].icon,
              }));
              setForecast(processedData);
          } catch (err) {
              console.error('Error fetching weather data:', err);
              setError('Failed to fetch weather data');
          }
      };

      fetchForecast();
  }, [city]);

  if (error) {
      return <div role="alert" aria-live="assertive">{error}</div>;
  }

  return (
    <section className="weather-forecast" aria-labelledby="weather-forecast-title">
          <ul className="row align-center list-unstyled">
              {forecast.map((item, index) => (
                  <li key={index} className="text-center col-xl-3 col-lg-4 col-md-6 col-sm-12 my-4" tabIndex={0}>
                      <article className="weather-card border py-4 px-2 m-3" role="article" aria-label={`Weather on ${new Date(item.date).toLocaleString()}`}>
                          <h3>{new Date(item.date).toLocaleString()}</h3>
                          <p>Temperature: {item.temp}°C</p>
                          <p>Description: {item.description}</p>
                          <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt={`Icon representing ${item.description}`} />
                      </article>
                  </li>
              ))}
          </ul>
      </section>
  );
};

export default WeatherForecast;
