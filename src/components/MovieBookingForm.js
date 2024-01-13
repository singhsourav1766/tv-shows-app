import React from 'react';
import './MovieBookingForm.css';

const MovieBookingForm = () => {
  return (
    <div className="movie-booking-form-container">
      <h2 className="movie-booking-form-title">Movie Booking Form</h2>
      <form className="movie-booking-form">
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="text" />
        <label>Mobile No:</label>
        <input type="text" />
        <button type="submit" disabled>Book Now</button>
      </form>
    </div>
  );
};

export default MovieBookingForm;
