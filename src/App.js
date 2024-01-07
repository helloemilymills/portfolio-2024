import './App.css';
import Carousel from './components/Carousel.js';

import image1A from './images/Wild Betty Beer Bottles Mockup.png';
import image1B from './images/example2.jpg';
import image1C from './images/example3.jpg';



export default function App() {

  const projectTitle1 = "Wild Betty";
  const projectIntro1 = "Billy's Brew, a coastal craft beer co, requested a label design for the launch of their new signature beer, 'Wild Betty'. The design needed to resonate with the brand's coastal lifestyle without being cliché.";
  const notableElements = ["Custom Diecuts", "Octopus Illustration"]
  const providedAssets = ["Billy's Brew logos", "Copy"]

  return (
    <>
      {/* carousel accepts props for the images, as well as the background & text colours for the sticker & em logo (for best contrast against the photos) */}
      <Carousel imageA={image1A} imageB={image1B} imageC={image1C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle1} projectIntro={projectIntro1} notableElements={notableElements} providedAssets={providedAssets}/>
    </>
  );
}

