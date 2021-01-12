import React from 'react';
import styled, {css} from 'styled-components/macro';

const Hero = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`

`;

const HeroSlider = styled.div`  
`;

const HeroContent = styled.div``;



const HeroSection = ({slides}) => {
  return (
    <Hero>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            <HeroSlider>
              <img />
              <HeroContent>
                <h1>{slide.title}</h1>
              </HeroContent>
            </HeroSlider>
          </HeroSlide>
        ))}
      </HeroWrapper>
    </Hero>
  )
}

export default HeroSection;
