import React from 'react';
import Header from './components/Header'; // Importa o Header
import EventSection from './components/EventSection'; // Importa a Seção de Eventos
import Carousel from './components/Carousel'; // Importa o Carrossel de Destaques
import './App.css'; // Importa os estilos globais

const App = () => {
  return (
    <div className="app-container">
      {/* Header (barra de navegação) */}
      <Header />

      {/* Seção Principal */}
      <main>
        {/* Seção de Eventos Circulares */}
        <EventSection />

        {/* Carrossel de Eventos */}
        <Carousel />
      </main>
    </div>
  );
};

export default App;
