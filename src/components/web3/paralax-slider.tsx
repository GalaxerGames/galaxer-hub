import portal1 from '../public/portal1.png';
import portal2 from '../public/portal2.png';
import portal3 from '../public/portal3.png';
import portal4 from '../public/portal4.png';
import Image from 'next/image';
import { useState } from 'react';

const images = [portal1, portal2, portal3, portal4]; // You can add as many images as you want

export function ParallaxSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="parallax-slider">
      <Image className="parallax-slider__image" src={images[currentImageIndex]} alt="Gallery" />
      <div className="parallax-slider__buttons">
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
}




