import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import Cases from '@/components/sections/Cases';
import Contacts from '@/components/sections/Contacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Cases />
        <Contacts />
      </main>
    </div>
  );
};

export default Index;