import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData, InfoDataTwo } from './data/InfoData';
import { SlidesData } from './data/SlidesData';
import GlobalStyles from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyles />
      <Navbar toggleMenu={toggleMenu} />
      <Dropdown isOpen={isOpen} toggleMenu={toggleMenu} />
      <HeroSection slides={SlidesData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default App;
