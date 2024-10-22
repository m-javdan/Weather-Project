import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchApiWeather({ city, setWeatherData, addToHistory }) {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50638de8cf602acc9bff0ddbe61482ec`
                );
                setWeatherData(response.data);
                addToHistory(city, response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                alert('Please type your city');
            }
        };

        fetchWeather();
    }, [city]);

    return null;
}

export default FetchApiWeather;
