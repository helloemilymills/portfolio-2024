import './App.css';
import { useState } from 'react';
import Carousel from './components/Carousel.js';

//wild betty beer
import image1A from './images/Wild Betty Beer Bottles Mockup.png';
import image1B from './images/Wild Betty Labels.png';
import image1C from './images/Wild Betty Billboard Mockup.png';

//takenobu article
import image2A from './images/Igarashi Article Mockup@2x.png';
import image2B from './images/Igarashi Article Flat@2x.png';
import image2C from './images/Igarashi Article Flat@2x.png';

//fiesta brochure
import image3A from './images/Fiesta Brochure Front Cover@2x.png';
import image3B from './images/Fiesta Brochure Inside Spread@2x.png';
import image3C from './images/Fiesta Brochure Outside Spread@2x.png';

export default function App() {

  const uniProjectDisclaimer = "This was a university assignment."

  //wild betty beer
  const projectTitle1 = "Wild Betty";
  const brief1 = "Billy's Brew, a coastal craft beer co, requested a label design for the launch of their new signature beer, 'Wild Betty'. The design needed to resonate with the brand's coastal lifestyle without being cliché.";
  const designDirection1 = "When exploring a connection between ‘wild’ and Noosa’s coastal lifestyle, I came across the Blue-Ringed Octopus. This is a small but deadly creature that lives in the Pacific Ocean off the eastern coast of Australia. When threatened, blue rings appear over its body. I thought this would be an apt representation of ‘Wild Betty’.";
  const notableElements1 = ["3 Unique Diecuts", "Original Illustration", "Blue Foil Embellishment (Front Label, Octopus Rings"];
  const providedAssets1 = ["Billy's Brew Logo Suite (3 Logos)", "Label Text", "Barcode, Recycle Icon, and Standard Drinks Icon (though I did customise these)"];

  //Takenobu Article
  const projectTitle2 = "Layout Design";
  const brief2 = "Design Jam asked me to typeset an article for their magazine. The overall design needed to be inspired by the artist featured in the article, Takenobu Igarashi.";
  const designDirection2 = "Taking visual inspiration from Igarashi's Kanagawa Art Festival Poster, I created this minimal & structured layout. I paid particular attention to removing widows and orphans in the copy, and ensuring column alignment. I added a top & bottom border to the article heading and author credit to create a visual bridge across the two pages. To finish it off, I added Igarashi's name in large type with low opacity to the top and bottom of the spread. I felt this added dimension, which is a key attribute of his work. ";
  const notableElements2 = ["Typesetting", "Tracking", "Paragraph Styles", "Grid Structure"];
  const providedAssets2 = ["Article Text", "Design Jam Logo"];

  //fiesta brochure
  const projectTitle3 = "Latin Festival Brochure";
  const brief3 = "The client requested a four page landscape brochure for an upcoming Latin festival in their city. The design needed to reflect Latin culture in a comtempory and playful way.";
  const designDirection3 = "I wanted to create a balanced & cohesive design that could flex according to its content while still maintaining continuity across all four pages. I used a grid system to achieve this. I felt that it maximised the available space and guided the reader without overwhelming them.";
  const notableElements3 = ["Custom Wordmark (Fiesta de Verano)", "Grid Structure"];
  const providedAssets3 = ["Brochure Text", "Images & Vector Art", "Brisbane City Council & Southbank Parklands Logos"];

  //counter shows matching carousel
  const [carouselCounter, setCarouselCounter] = useState(1);

  function previousCarousel () {
    (carouselCounter > 1) && setCarouselCounter(carouselCounter - 1)
  }

  //change the "<" number to the number of carousels
  function nextCarousel () {
    (carouselCounter < 3) && setCarouselCounter(carouselCounter + 1)
  }

    return (
      <>
        <div className='previousNextContainer'>
          <div className='previous previousNext' onClick={() => previousCarousel()}>
            <p className='previousNextText'>Previous</p>
          </div>
          <div className='next previousNext' onClick={() => nextCarousel()}>
            <p className='previousNextText'>Next</p>
          </div>
        </div>
        
        {(carouselCounter === 1) && <Carousel imageA={image1A} imageB={image1B} imageC={image1C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle1} brief={brief1} designDirection={designDirection1} notableElements={notableElements1} providedAssets={providedAssets1} uniProjectDisclaimer={uniProjectDisclaimer}/>}
        {(carouselCounter === 2) && <Carousel imageA={image2A} imageB={image2B} imageC={image2C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle2} brief={brief2} designDirection={designDirection2} notableElements={notableElements2} providedAssets={providedAssets2} uniProjectDisclaimer={uniProjectDisclaimer}/>}
        {(carouselCounter === 3) && <Carousel imageA={image3A} imageB={image3B} imageC={image3C} stickerBackgroundColor="white" stickerTextColor="black" logoTextColor="white" projectTitle={projectTitle3} brief={brief3} designDirection={designDirection3} notableElements={notableElements3} providedAssets={providedAssets3} uniProjectDisclaimer={uniProjectDisclaimer}/>}

      </>
    )
}

