import React from 'react';
import './ShowDetails.css';

const ShowDetails = ({ show }) => {
    return (
        <div className="show-details-container">
            {show.image && <img src={show.image.medium} alt={show.name} className="show-image" />}
            <h2 className="show-details-title">{show.name}</h2>
            <p className="show-details-info">Language: {show.language}</p>
            <p className="show-details-info">Genres: {show.genres.join(', ')}</p>
            <div className="show-details-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
            <p className="show-details-info">Type: {show.type}</p>
            <p className="show-details-info">Rating: {show.rating.average}</p>
            <p className="show-details-info">Status: {show.status}</p>
        </div>
    );
};

export default ShowDetails;
