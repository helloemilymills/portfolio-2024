import { useState } from 'react';
import './Carousel.css';
import Sticker from './Sticker';
import Logo from './Logo';
import ProjectDrawer from './ProjectDrawer';


export default function Carousel({imageA, imageB, imageC, stickerBackgroundColor, stickerTextColor, logoTextColor, projectTitle, projectInfo}) {

  const [drawerState, setDrawerState] = useState(false);

  function toggleDrawerState() {
    drawerState ? setDrawerState(false) : setDrawerState(true)
  }

  {/* Note that if you add more than 3 images at a later date, you'll need to adjust the logic in this function */}
  function changeToSlide(n) {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i] !== slides[n-1] ? slides[i].style.display = 'none' : slides[i].style.display = 'block';
    }; 
  };

    return (
      <>

        <div className="carousel-container">
          <img className="slide" id="slide 1" src={imageA} alt=""/>
          <img className="slide" id="slide 2" src={imageB} alt=""/>
          <img className="slide" id="slide 3" src={imageC} alt=""/>
        </div>     

        {/*dots*/}
        <div className="dots-container">
          <div className="dot" onClick={() => changeToSlide(1)}></div>
          <div className="dot" onClick={() => changeToSlide(2)}></div>
          <div className="dot" onClick={() => changeToSlide(3)}></div>
        </div>

        <Logo color={logoTextColor}/>
  

        {drawerState ? (<ProjectDrawer closeDrawer={toggleDrawerState} projectTitle={projectTitle} projectInfo={projectInfo}/>) 
            : (<div onClick={() => toggleDrawerState()}>
                <Sticker backgroundColor={stickerBackgroundColor} textColor={stickerTextColor}/>
              </div>)}
      </>
    );
  };
  