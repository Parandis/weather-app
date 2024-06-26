import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherForecast from './components/WeatherForecast';

test('renders weather forecast', async () => {
    render(<WeatherForecast city="Vancouver" />);
    const linkElement = await screen.findByText(/5-Day Weather Forecast/i);
    expect(linkElement).toBeInTheDocument();
});