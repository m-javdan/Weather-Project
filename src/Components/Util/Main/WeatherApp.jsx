import React, { useState } from 'react';
import SearchField from './SearchField';
import FetchApiWeather from './FetchApiWeather';
import RecentLocations from '../../Header/Navbar/RecentLocations';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [history, setHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const updateHistory = (newCity, weatherData) => {
        setHistory((prevHistory) => {
            const updatedHistory = [{ city: newCity, weather: weatherData },
                ...prevHistory.filter(item => item.city !== newCity)];
            return updatedHistory.slice(0, 5);
        });
    };

    const handleSearch = () => {
        setSearchQuery(city);
        setCity('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCitySelect = (selectedCity) => {
        setCity(selectedCity);
    };

    return (
        <div>
            <RecentLocations searchHistory={history} handleCitySelect={handleCitySelect} />
            <SearchField city={city} setCity={setCity} handleSearch={handleSearch} handleKeyPress={handleKeyPress} />
            <FetchApiWeather city={searchQuery} setWeatherData={setWeather} addToHistory={updateHistory} />
        </div>
    );
}

export default WeatherApp;
