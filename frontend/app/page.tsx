// eslint-disable
'use client';

import { useEffect, useState } from 'react';
import { FooterWebsite } from '@/components/footer/FooterWebsite';
import Faq from '@/components/landing/faq';
import FirstSection from '@/components/landing/first-section';
import Hero from '@/components/landing/hero';
import SecondSection from '@/components/landing/second-section';
import NavbarFixed from '@/components/navbar/NavbarFixed';

export default function PricingPage() {
  const [theme, setTheme] = useState('light');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      setIsClient(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="relative bg-white dark:bg-zinc-950">
      <div className="relative flex h-full min-h-screen flex-col items-center overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center pb-0 md:pb-[80px]">
          <Hero />
          <FirstSection />
          <SecondSection />
          <Faq />
        </div>
        <FooterWebsite />
      </div>
      {isClient && <NavbarFixed toggleTheme={toggleTheme} currentTheme={theme} />}
    </div>
  );
}
