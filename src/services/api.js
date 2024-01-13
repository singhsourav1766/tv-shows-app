import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

export const fetchAllShows = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
    }
};
