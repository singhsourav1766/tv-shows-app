import React, { useState, useEffect } from 'react';
import { fetchAllShows } from '../services/api';
import { Link, useParams } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';
import MovieBookingForm from '../components/MovieBookingForm';
import './ShowSummary.css';


const ShowSummary = () => {
    const { showId } = useParams();
    const [show, setShow] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllShows();
                const selectedShow = data.find((s) => s.show.id === parseInt(showId, 10));
                setShow(selectedShow.show);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [showId]);

    const handleBookTicketClick = () => {
        setShowBookingForm(true);
    };

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <ShowDetails show={show} />
            {!showBookingForm && (
                <button className="button" onClick={handleBookTicketClick}>
                    Book Movie Ticket
                </button>
            )}
            {showBookingForm && <MovieBookingForm />}
            <button className="button">
                <Link to={`/`}>Back</Link>
            </button>
        </div>

    );
};

export default ShowSummary;
