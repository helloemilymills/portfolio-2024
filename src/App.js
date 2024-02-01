import './App.css';
import Carousel from './components/Carousel.js';

//wild betty beer
import image1A from './images/Wild Betty Beer Bottles Mockup.png';
import image1B from './images/Wild Betty Labels.png';
import image1C from './images/Wild Betty Billboard Mockup.png';

//fiesta brochure
import image2A from './images/Fiesta Brochure Front Cover@2x.png';
import image2B from './images/Fiesta Brochure Inside Spread@2x.png';
import image2C from './images/Fiesta Brochure Outside Spread@2x.png';

export default function App() {

  const uniProjectDisclaimer = "This was a university assignment."

  //wild betty beer
  const projectTitle1 = "Wild Betty";
  const brief1 = "Billy's Brew, a coastal craft beer co, requested a label design for the launch of their new signature beer, 'Wild Betty'. The design needed to resonate with the brand's coastal lifestyle without being cliché.";
  const designDirection1 = "When exploring a connection between ‘wild’ and Noosa’s coastal lifestyle, I came across the Blue-Ringed Octopus. This is a small but deadly creature that lives in the Pacific Ocean off the eastern coast of Australia. When threatened, blue rings appear over its body. I thought this would be an apt representation of ‘Wild Betty’.";
  const notableElements1 = ["3 Unique Diecuts", "Original Illustration", "Blue Foil Embellishment (Front Label, Octopus Rings"];
  const providedAssets1 = ["Billy's Brew Logo Suite (3 Logos)", "Label Text", "Barcode, Recycle Icon, and Standard Drinks Icon (though I did customise these)"];

  //fiesta brochure
  const projectTitle2 = "Latin Festival Brochure";
  const brief2 = "The client wanted to create a four page landscape brochure for an upcoming Latin festival in their city. They requested that the design reflect Latin culture in a comtempory and playful way.";
  const designDirection2 = "I wanted to create a balanced & cohesive design that could flex according to its content while still maintaining continuity across all four pages. I used a grid system to achieve this. I felt that it maximised the available space and guided the reader without overwhelming them.";
  const notableElements2 = ["Custom Wordmark (Fiesta de Verano)", "Grid Structure"];
  const providedAssets2 = ["Brochure Text", "Images & Vector Art", "Brisbane City Council & Southbank Parklands Logos"];

  return (
    <>
      {/* carousel accepts props for the images, as well as the background & text colours for the sticker & em logo (for best contrast against the photos) */}
      <Carousel imageA={image1A} imageB={image1B} imageC={image1C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle1} brief={brief1} designDirection={designDirection1} notableElements={notableElements1} providedAssets={providedAssets1} uniProjectDisclaimer={uniProjectDisclaimer}/>
      {/* <Carousel imageA={image2A} imageB={image2B} imageC={image2C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle2} brief={brief2} designDirection={designDirection2} notableElements={notableElements2} providedAssets={providedAssets2} uniProjectDisclaimer={uniProjectDisclaimer}/> */}

    </>
  );
}

