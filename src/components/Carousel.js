import { useState } from 'react';

import './Carousel.css';

import Sticker from './Sticker';
import Logo from './Logo';
import ProjectDrawer from './ProjectDrawer';
import ContactPanel from './ContactPanel';

export default function Carousel({imageA, imageB, imageC, stickerBackgroundColor, stickerTextColor, logoTextColor, projectTitle, projectIntro, notableElements, providedAssets}) {

  const [drawerState, setDrawerState] = useState(false);

  function toggleDrawerState() {
    drawerState ? setDrawerState(false) : setDrawerState(true)
  }
  
  const [contactFormState, setContactFormState] = useState(false);

  function toggleContactFormState() {
    contactFormState ? setContactFormState(false) : setContactFormState(true)
  }

  function closeDrawerOpenContactForm() {
    setDrawerState(false);
    setContactFormState(true);
  }

  // Note that if you add more than 3 images at a later date, you'll need to adjust the logic in this function
  function changeToSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    for (let i = 0; i < slides.length; i++) {
      slides[i] !== slides[n-1] ? slides[i].style.display = 'none' : slides[i].style.display = 'block';
      dots[i] === dots[n-1] ? dots[i].style.transform = 'scale(1.25)' : dots[i].style.transform = 'scale(1)';
    }; 
  };

    return (
      <>

        <div className="carousel-container">
          <img className="slide" id="slide1" src={imageA} alt=""/>
          <img className="slide" id="slide2" src={imageB} alt=""/>
          <img className="slide" id="slide3" src={imageC} alt=""/>
        </div>     

        {/*dots*/}
        <div className="dots-container">
          <div className="dot" id="dot1" onClick={() => changeToSlide(1)}></div>
          <div className="dot" id="dot2" onClick={() => changeToSlide(2)}></div>
          <div className="dot" id="dot3" onClick={() => changeToSlide(3)}></div>
        </div>

        <Logo color={logoTextColor}/>
        {contactFormState && <ContactPanel closeContactForm={toggleContactFormState} drawerState={drawerState}/>}

        {drawerState && !contactFormState ? (<ProjectDrawer closeDrawer={toggleDrawerState} closeDrawerOpenContactForm={closeDrawerOpenContactForm} projectTitle={projectTitle} projectIntro={projectIntro} notableElements={notableElements} providedAssets={providedAssets} drawerState={drawerState}/>) 
            : (<Sticker backgroundColor={stickerBackgroundColor} textColor={stickerTextColor} toggleDrawerState={toggleDrawerState}/>)
    }   
      </>
    );
  };
  