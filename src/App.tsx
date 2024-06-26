import React from 'react';
import WeatherForecast from './components/WeatherForecast';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <WeatherForecast city="Vancouver" />
            </header>
        </div>
    );
};

export default App;