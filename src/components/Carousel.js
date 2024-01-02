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

          {/*Next and previous buttons*/}
          {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a> */}

          {/*dots*/}
          {/* <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div> */}
        </div>     

      </>
    );
  }
  