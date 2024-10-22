import React from 'react';

function SearchField({ city, setCity, handleSearch, handleKeyPress }) {
    return (
        <div className="flex items-center justify-center mt-4 mb-4">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter city name"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-1 w-1/3"
                autoFocus

            />
            <button
                onClick={handleSearch} // Trigger search when button is clicked
                className="bg-blue-500 text-white rounded-r px-4 py-2 hover:bg-blue-600 transition duration-200"
            >
                Search
            </button>
        </div>
    );
}

export default SearchField;
