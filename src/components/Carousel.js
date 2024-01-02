import './Carousel.css';
import image1 from '../images/example1.jpg';
import image2 from '../images/example2.jpg';
import image3 from '../images/example3.jpg';
import image4 from '../images/example4.jpg';

export default function Carousel() {

    return (
      <>

        <div class="carousel-container">
          <img src={image1} alt=''/>
          <img src={image2} alt=''/>
          <img src={image3} alt=''/>
          <img src={image4} alt=''/>
        </div>     

        {/*dots*/}
        <div class="dots-container">
          <div class="dot" onclick="currentSlide(1)"></div>
          <div class="dot" onclick="currentSlide(2)"></div>
          <div class="dot" onclick="currentSlide(3)"></div>
          <div class="dot" onclick="currentSlide(4)"></div>
          <div class="dot" onclick="currentSlide(5)"></div>
        </div>

      </>
    );
  }
  