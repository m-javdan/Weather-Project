import React, { useEffect, useState } from 'react';
import FetchUserCity from "./FetchUserCity";
import axios from 'axios';

const WeatherByIP = () => {
    const [weather, setWeather] = useState(null); // Weather data
    const [city, setCity] = useState(''); // User city
    const [dateTime, setDateTime] = useState(''); // Current date and time

    // Function to format the current date and time
    const formatCurrentDateTime = () => {
        const now = new Date();
        const options = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
        };
        return now.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const userCity = await FetchUserCity();
                console.log('User City:', userCity);
                setCity(userCity);

                if (!userCity) {
                    console.error('User City is null');
                    return;
                }

                // Fetch weather data using the city name
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=50638de8cf602acc9bff0ddbe61482ec&units=metric`
                );
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Set date and time and fetch weather data
        setDateTime(formatCurrentDateTime());
        fetchWeatherData();

        // Update date and time every second
        const interval = setInterval(() => {
            setDateTime(formatCurrentDateTime());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-gray-800 text-white p-2 fixed bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    {dateTime && <p>{dateTime}</p>}
                    {city && <h2 className="text-lg mr-4">Weather information for your city: {city}</h2>}
                </div>
                {weather && weather.main ? (
                    <div className="flex space-x-4">
                        <p>Temperature: {weather.main.temp} °C</p>
                        <p>Feels Like: {weather.main.feels_like} °C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                    </div>
                ) : (
                    <p>No weather data available.</p>
                )}
                {!city && <p>No city data available. Please enter a city or check your location settings.</p>}
            </div>
        </footer>
    );
};

export default WeatherByIP;
