import './Carousel.css';

export default function Carousel({imageA, imageB, imageC}) {

    return (
      <>

        <div class="carousel-container">
          <img src={imageA} alt=''/>
          <img src={imageB} alt=''/>
          <img src={imageC} alt=''/>
        </div>     

        {/*dots*/}
        <div class="dots-container">
          <div class="dot" onclick="currentSlide(1)"></div>
          <div class="dot" onclick="currentSlide(2)"></div>
          <div class="dot" onclick="currentSlide(3)"></div>
        </div>

      </>
    );
  }
  