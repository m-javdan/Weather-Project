import axios from 'axios';

// Fetch the city name based on the user's IP address
const FetchUserCity = async () => {
    const token = '42d58449917238'; // my token
    try {
        const response = await axios.get(`https://ipinfo.io?token=${token}`);
        if (response.data.city) {
            console.log('User City:', response.data.city);
            return response.data.city;
        } else {
            console.error('No city information returned from API');
            return null;
        }
    } catch (error) {
        console.error('Error getting user city:', error);
        return null;
    }
};

export default FetchUserCity;
