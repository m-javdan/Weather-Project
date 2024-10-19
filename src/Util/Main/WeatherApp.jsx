import React, { useState } from 'react';
import SearchField from './SearchField';
import FetchApiWeather from './FetchApiWeather';
import RecentLocations from '../../Components/Header/Navbar/RecentLocations';

function WeatherApp() {
    const [city, setCity] = useState(''); // Default value for the city
    const [weather, setWeather] = useState(null); // Weather state
    const [history, setHistory] = useState([]); // Search history
    const [searchQuery, setSearchQuery] = useState(''); // Store search value

    // Update search history
    const updateHistory = (newCity, weatherData) => {
        setHistory((prevHistory) => {
            const updatedHistory = [{ city: newCity, weather: weatherData },
                ...prevHistory.filter(item => item.city !== newCity)];
            return updatedHistory.slice(0, 5); // Limit history to 5 cities
        });
    };

    const handleSearch = () => {
        setSearchQuery(city); // Execute search when button is clicked
        setCity(''); // Clear input after search
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(); // Execute search when Enter is pressed
        }
    };

    const handleCitySelect = (selectedCity) => {
        setCity(selectedCity); // Set city when selected from history
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
