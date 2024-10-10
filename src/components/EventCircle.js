import React from 'react';
import './EventCircle.css';

const EventCircle = ({ image, title }) => {
  return (
    <div className="event-circle">
      <img src={image} alt={title} className="circle-image" />
      <span>{title}</span>
    </div>
  );
};

export default EventCircle;
