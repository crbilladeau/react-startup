import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { SlidesData } from './data/SlidesData';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection slides={SlidesData} />
    </>
  );
}

export default App;
