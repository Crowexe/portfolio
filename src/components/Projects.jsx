import { useState } from 'react';
import './Projects.css';

const Carousel = () => {
  const carouselData = [
    {
      imageUrl: '/proyectos/to-do-list.png',
      text: 'To do list', 
      description: 'To do list app made with React',
      link: 'https://to-do-list-crow.vercel.app/',
    },
    {
      imageUrl: '/proyectos/spotify-clone.png',
      text: 'Spotify clone', 
      description: 'Spotify clone made with React',
      link: 'https://spotify-clone-kappa.vercel.app/',
    },
    {
      imageUrl: '/proyectos/to-do-list.png',
      text: 'Chat online', 
      description: 'Chat online made with React and Firebase',
      link: 'https://chat-react-six.vercel.app/',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-container">
       <button className="prev-button" onClick={handlePrevSlide}>
        <i className="fa-solid fa-arrow-left" />
      </button>
      <div className="carousel-image" style={{ backgroundImage: `url(${carouselData[currentSlide].imageUrl})` }}>
        <div className="carousel-text">{carouselData[currentSlide].text}</div>
        <div className="carousel-description">{carouselData[currentSlide].description}</div>
        <a className="carousel-link" href={carouselData[currentSlide].link} target="_blank" rel="noopener noreferrer">View project</a>
      </div>
      <button className="next-button" onClick={handleNextSlide}>
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
};

export default Carousel;
