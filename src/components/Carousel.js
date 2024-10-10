import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img src="/rockinrio.jpg" alt="Rock in Rio" />
          </div>
          <div className="carousel-info">
            <p className="date">04/09/2024</p>
            <p className="time">23:00 às 07:00</p>
            <h3>ROCK IN RIO BRASIL</h3>
            <p>Barra da Tijuca - Rio de Janeiro</p>
            <div className="buttons">
              <button className="details-btn">Ver detalhes</button>
              <button className="buy-btn">Comprar</button>
            </div>
          </div>
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
};

export default Carousel;
