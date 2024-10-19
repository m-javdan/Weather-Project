import axios from 'axios';

// Fetch the city name based on the user's IP address
const FetchUserCity = async () => {
    const token = '42d58449917238'; // my token
    try {
        // Make a request to the ipinfo.io to get location info
        const response = await axios.get(`https://ipinfo.io?token=${token}`);

        // Check if city data is returned
        if (response.data.city) {
            console.log('User City:', response.data.city);
            return response.data.city; // Return the city name
        } else {
            console.error('No city information returned from API');
            return null; // Return null if city info is missing
        }
    } catch (error) {
        // Log any error that occurs during the request
        console.error('Error getting user city:', error);
        return null; // Return null if an error occurs
    }
};

export default FetchUserCity;
