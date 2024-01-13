import React, { useEffect, useState } from 'react';
import { fetchAllShows } from '../services/api';
import ShowList from '../components/ShowList';
import './Home.css';

const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllShows();
                console.log(data)
                setShows(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="page-container">
            <h1 className="page-title">TV Show App</h1>
            <ShowList shows={shows} />
        </div>
    );
};

export default Home;
