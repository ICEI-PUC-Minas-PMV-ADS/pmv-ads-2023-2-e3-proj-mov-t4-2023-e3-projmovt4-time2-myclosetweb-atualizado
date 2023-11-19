import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  const [images, setImages] = useState([
    'https://i.ibb.co/sjf0fcj/top.png',
    
  ]);

  const [imagesForSecondSwiper, setImagesForSecondSwiper] = useState([
    'https://i.ibb.co/sHzTCmv/baixo.png',
    
  ]);

  const styles = `
    #app { height: 100% }
    html,
    body {
      position: relative;
      height: 100%;
      margin: 0;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      padding: 0;
    }

    .swiper-container {
      width: 100%;
      margin-top: 10px; /* Adjust this value as needed */
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

    .upload-button,
    .second-upload-button {
      margin-top: 20px;
      background-color: #D36DBF;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    .upload-button input,
    .second-upload-button input {
      display: none;
    }

    .second-container {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .second-swiper-container {
      width: 100%;
    }

    .second-swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }

    .second-swiper-slide img {
      display: block;
      width: 100%;
    }

    .second-upload-button {
      margin-top: 20px;
      background-color: #D36DBF;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...images, reader.result];
      setImages(newImages);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploadForSecondSwiper = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...imagesForSecondSwiper, reader.result];
      setImagesForSecondSwiper(newImages);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

 
return (
  <>
    <style>{styles}</style>
    <div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="upload-button-container">
        <button className="upload-button">
          <label htmlFor="imageUpload">
            +
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </button>
      </div>
    </div>
    <div className="second-container">
      <div className="second-swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {imagesForSecondSwiper.map((imageUrl, index) => (
            <SwiperSlide key={index} className="second-swiper-slide">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="second-upload-button-container">
        <button className="second-upload-button">
          <label htmlFor="secondImageUpload">
            +
            <input
              type="file"
              id="secondImageUpload"
              accept="image/*"
              onChange={handleImageUploadForSecondSwiper}
            />
          </label>
        </button>
      </div>
    </div>
  </>

);
}