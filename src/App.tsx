import React, { useState } from 'react';
import WeatherForecast from './components/WeatherForecast';
import './App.scss';

const App: React.FC = () => {
    const [city, setCity] = useState('Vancouver');
    const [inputCity, setInputCity] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputCity.trim() !== '') {
            setCity(inputCity.trim());
        }
    };

    return (
        <div className="App">
            <header className="App-header p-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 id="weather-forecast-title" className="text-center my-4" tabIndex={0}>{city}'s 5-Day Weather Forecast</h1>
                    <form onSubmit={handleSearch} className="city-search-form" aria-label="City search form">
                        <label htmlFor="city-input" className="visually-hidden">City name</label>
                        <input
                            id="city-input"
                            type="text"
                            value={inputCity}
                            onChange={(e) => setInputCity(e.target.value)}
                            placeholder="Enter city name"
                            aria-label="City name"
                            aria-required="true"
                            aria-describedby="city-input-description"
                            className="mx-3"
                        />
                        <span id="city-input-description" className="visually-hidden">Enter the name of the city you want to search for.</span>
                        <button type="submit" aria-label="Search for weather" className="text-light bg-dark border-0">Search</button>
                    </form>
                </div>
                <WeatherForecast city={city} />
            </header>
        </div>
    );
};

export default App;