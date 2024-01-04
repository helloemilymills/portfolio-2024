import './App.css';
import Carousel from './components/Carousel.js';

import image1A from './images/example1.jpg';
import image1B from './images/example2.jpg';
import image1C from './images/example3.jpg';



export default function App() {

  const projectTitle1 = "Test Title 1";
  const projectInfo1 = "Test Info 1";

  return (
    <>
      {/* carousel accepts props for the images, as well as the background & text colours for the sticker & em logo (for best contrast against the photos) */}
      <Carousel imageA={image1A} imageB={image1B} imageC={image1C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle1} projectInfo={projectInfo1}/>
    </>
  );
}

