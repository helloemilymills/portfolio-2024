import './App.css';
import Carousel from './components/Carousel.js';

import image1A from './images/Wild Betty Beer Bottles Mockup.png';
import image1B from './images/Wild Betty Billboard Mockup.png';
import image1C from './images/Wild Betty Labels.png';



export default function App() {

  const projectTitle1 = "Wild Betty";
  const projectIntro1 = "Billy's Brew, a coastal craft beer co, requested a label design for the launch of their new signature beer, 'Wild Betty'. The design needed to resonate with the brand's coastal lifestyle without being cliché.";
  const notableElements = ["3 Custom Diecuts", "Original Illustration", "Blue Foil Embellishment"]
  
  //not sure if I want to include this. might confuse readers
  const providedAssets = ["Billy's Brew logos", "Label Copy"]

  return (
    <>
      {/* carousel accepts props for the images, as well as the background & text colours for the sticker & em logo (for best contrast against the photos) */}
      <Carousel imageA={image1A} imageB={image1B} imageC={image1C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle1} projectIntro={projectIntro1} notableElements={notableElements} providedAssets={providedAssets}/>
    </>
  );
}

