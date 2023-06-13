import './Home.css'
import React from 'react';
import { ParallaxSlider } from './components/ParalaxSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import drochImage from './public/drochImage.png'
import seasamhImage from './public/seasamhImage.png'
import tacaiochtImage from './public/tacaiochtImage.png'
import cara1 from './assets/1.png'
import cara2 from './assets/2.png'
import cara3 from './assets/3.png'
import cara4 from './assets/4.png'
import cara5 from './assets/5.png'
import cara6 from './assets/6.png'




export default function Home() {
  return (
    <div>
      <header>
        <h1></h1>
        {/* Add more content to the header here */}
      </header>

      <ParallaxSlider />
      <div style={{ textAlign: 'center', fontSize: '24px', fontStyle: 'italic', marginTop: '20px' }}>
        "This is a large quote centered in the div."
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <img src={drochImage} alt="Droch" style={{ marginRight: '20px' }} />
        <p>This is a paragraph next to an image.</p>
      </div>
      <div style={{ textAlign: 'center', fontSize: '24px', fontStyle: 'italic', marginTop: '20px' }}>
        "This is a large quote centered in the div."
      </div>
      <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
      <p>This is a paragraph next to an image.</p>
        <img src={seasamhImage} alt="Seasamh" style={{ marginRight: '20px' }} />
        
      </div>
      <div style={{ textAlign: 'center', fontSize: '24px', fontStyle: 'italic', marginTop: '20px' }}>
        "This is a large quote centered in the div."
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <img src={tacaiochtImage} alt="Tacaiocht" style={{ marginRight: '20px' }} />
        <p>This is a paragraph next to an image.</p>
      </div>
      <div style={{ textAlign: 'center', fontSize: '24px', fontStyle: 'italic', marginTop: '20px' }}>
        "This is a large quote centered in the div."
      </div>
      <Carousel className="carousel-container">
        <div>
          <img src={cara1} style={{ width: '100%', height: 'auto' }}/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={cara2} style={{ width: '100%', height: 'auto' }}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={cara3} style={{ width: '100%', height: 'auto' }}/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={cara4} style={{ width: '100%', height: 'auto' }}/>
          <p className="legend">Legend 3</p>
        </div>
        <div> 
          <img src={cara5} style={{ width: '100%', height: 'auto' }} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={cara6} style={{ width: '100%', height: 'auto' }}/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <footer>
        <p>Footer content goes here</p>
        {/* Add more content to the footer here */}
      </footer>
    </div>
  );
}