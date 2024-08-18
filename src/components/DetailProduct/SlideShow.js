import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slideshow() {
  return (
    <div class="col-lg-8 cancleBorder">
        <div class="card mb-4">
                        <div class="slideShow">
                        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://file4.batdongsan.com.vn/resize/1275x717/2024/08/07/20240807234240-a5ff_wm.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://file4.batdongsan.com.vn/resize/1275x717/2024/08/07/20240807234240-a5ff_wm.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://file4.batdongsan.com.vn/resize/1275x717/2024/08/07/20240807234240-a5ff_wm.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
                        </div>
                        
                    </div>
                    </div>
    
  );
}

export default Slideshow;
