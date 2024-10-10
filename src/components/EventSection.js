import React from 'react';
import EventCircle from './EventCircle'; // Importa o componente EventCircle

const EventSection = () => {
  return (
    <div className="event-section">
      <EventCircle image="/path-to-image/rio.jpg" title="Rio de Janeiro" />
      <EventCircle image="/path-to-image/sp.jpg" title="São Paulo" />
      <EventCircle image="/path-to-image/carnaval.jpg" title="Carnaval" />
      <EventCircle image="/path-to-image/barretos.jpg" title="Festa do Peão" />
      <EventCircle image="/path-to-image/viola-show.jpg" title="Viola Show" />
    </div>
  );
};

export default EventSection;
