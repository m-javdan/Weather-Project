import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchApiWeather({ city, setWeatherData, addToHistory }) {
    const [error, setError] = useState(null); // State to store error messages

    useEffect(() => {
        if (!city) return; // Do not proceed if the city is not provided

        const fetchWeather = async () => {
            try {
                // Fetch weather data from the API
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50638de8cf602acc9bff0ddbe61482ec`
                );
                setWeatherData(response.data); // Update the weather state with the fetched data
                addToHistory(city, response.data); // Update search history with the new data
                setError(null); // Clear any previous error on successful fetch
            } catch (error) {
                console.error("Error fetching weather data:", error); // Log any error that occurs during fetch
                alert('Please type your city'); // Alert for invalid city input
            }
        };

        fetchWeather(); // Call the function to fetch weather data
    }, [city]); // Run effect whenever the city changes

    return null; // No error message to display
}

export default FetchApiWeather;
