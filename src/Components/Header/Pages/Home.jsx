import React from 'react';
import WeatherApp from "../../Util/Main/WeatherApp"; // Main component for displaying weather information
import WeatherByIP from "../../Util/Footer/IP-Address/WeatherByIP"; // Component to display user weather based on IP

const Home = () => {
    return (
        <main> {/* Main section of the site */}
            <WeatherApp /> {/* Display the weather application */}
            <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full">
                {/* Footer that remains fixed at the bottom of the page */}
                <WeatherByIP /> {/* Display user weather based on IP in the footer */}
            </footer>
        </main>
    );
};

export default Home;
