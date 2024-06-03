'use client'

import Home from '@/components/page/home';
import Splash from '@/components/page/splash';
import React, { useEffect, useState } from 'react';


const HomeView: React.FC = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewComponent(true);
    }, 10000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {showNewComponent ? <Home /> : <Splash navigate={setShowNewComponent} />}
    </>
  );
};

export default HomeView;
