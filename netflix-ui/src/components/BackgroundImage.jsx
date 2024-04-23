import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Import your images from the assets folder
import image1 from "../assets/background1.jpg";
import image2 from "../assets/background2.jpg";
import image3 from "../assets/background3.jpg";
import image4 from "../assets/background4.jpg";
import image5 from "../assets/backgroungd5.jpg";
import image6 from "../assets/backgroungd6.jpg";
import image7 from "../assets/backgroungd7.jpg";
// Add more imports as needed

const Container = styled.div`
    height: 100vh;
    width: 100vw;

    img{
              height: 100vh;
              width: 100vw;
              object-fit: cover;
          }
`;

const BackgroundImages = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    // Array of imported images
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,

      // Add more images as needed
    ];

    // Select a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImagePath = images[randomIndex];

    // Set the random image path
    setRandomImage(randomImagePath);
  };

  return (
    <Container>
      {randomImage && <img src={randomImage} alt="background" />}
    </Container>
  );
};

export default BackgroundImages;

