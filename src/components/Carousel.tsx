import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const slides = [
    { 
      imageUrl: 'https://img.freepik.com/free-vector/juice-ad-with-gradients-letterings_52683-30490.jpg', 
      text: 'Nikmati Kesegaran Alami Kadita Juice',
      subtext: 'Setiap tegukan penuh nutrisi'
    },
    { 
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c72839102153055.5f30325ff0549.jpg', 
      text: 'Berbagai Pilihan Juice Segar',
      subtext: 'Fresh, Sehat, Lezat'
    },
    { 
      imageUrl: 'https://palpos.bacakoran.co/upload/677ddc89a10c8c4d807460f204eb2f0b.jpg', 
      text: 'Alpukat Kocok Spesial Kami',
      subtext: 'Kreasi Unik Rasa Istimewa'
    },
  ];

  return (
    <Carousel 
      autoPlay 
      interval={5000} 
      infiniteLoop 
      showThumbs={false}
      showStatus={false}
      emulateTouch
      swipeable
      className="rounded-lg overflow-hidden shadow-lg"
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img 
            src={slide.imageUrl} 
            alt={slide.text} 
            className='w-full h-[500px] object-cover' 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              {slide.text}
            </h2>
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              {slide.subtext}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;