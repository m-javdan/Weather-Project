import React from 'react';
import WeatherApp from "../../Util/Main/WeatherApp";
import WeatherByIP from "../../Util/Footer/IP-Address/WeatherByIP";

const Home = () => {
    return (
        <main>
            <WeatherApp /> {/* Display the weather application */}
            <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full">
                <WeatherByIP /> {/* Display user weather based on IP in the footer */}
            </footer>
        </main>
    );
};

export default Home;
