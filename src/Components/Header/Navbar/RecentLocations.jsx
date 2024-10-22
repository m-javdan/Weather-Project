import React from 'react';

function RecentLocations({searchHistory, handleCitySelect}) {
    return (
        <section className="min-h-[200px] sticky top-0 z-10 p-4 text-center"
                 // The title of recently searched places
                 style={{background: 'linear-gradient(to right, #FA876B, #FEB47B)'}}>
            <h2 className="text-base font-semibold mb-2 text-white">Recent
                Locations</h2>
            <div className="flex justify-center flex-wrap space-x-4">
                {searchHistory.map((item, index) => (
                    <article
                        key={index}
                        onClick={() => handleCitySelect(item.city)}
                        className="bg-orange-200 p-4 rounded shadow-md cursor-pointer transition duration-200"
                    >
                        <p className="font-bold">{item.city}</p>
                        {item.weather && (
                            <div>
                                <p>Temperature: {(item.weather.main.temp - 273.15).toFixed(2)} °C</p>
                                <p>Feels Like: {(item.weather.main.feels_like - 273.15).toFixed(2)} °C</p>
                                <p>Humidity: {item.weather.main.humidity}%</p>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default RecentLocations;
