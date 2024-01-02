import './App.css';
import Carousel from './components/Carousel.js';

import image1A from './images/example1.jpg';
import image1B from './images/example2.jpg';
import image1C from './images/example3.jpg';

export default function App() {
  return (
    <>
      <Carousel imageA={image1A} imageB={image1B} imageC={image1C}/>
    </>
  );
}

