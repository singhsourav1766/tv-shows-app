import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = ({ shows }) => {
    return (
        <div className="show-list-container">
            <ul className="show-list">
                {shows.map((show) => (
                    <Link to={`/show/${show.show.id}`} key={show.show.id} className="show-link">
                        <li className="show-item">
                            {show.show.image && <img src={show.show.image.medium} alt={show.show.name} className="show-image" />}
                            <h3 className="show-title">{show.show.name}</h3>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ShowList;
