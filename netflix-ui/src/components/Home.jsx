import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Import your images from the assets folder
import image1 from "../assets/home1.jpg";
import image2 from "../assets/home2.jpg";
import image3 from "../assets/home3.jpg";
import image4 from "../assets/home4.jpg";
import image5 from "../assets/home5.jpg";
import image6 from "../assets/home6.jpg";
import image7 from "../assets/home7.jpg";
import image8 from "../assets/home8.jpg";
import image9 from "../assets/home9.jpg";
import image10 from "../assets/home10.jpg";
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

const Home = () => {
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
      image8,
      image9,
      image10,
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
      {randomImage && <img src={randomImage} alt="home" />}
    </Container>
  );
};

export default Home;

