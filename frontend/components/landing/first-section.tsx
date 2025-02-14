'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FirstSection() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('first-section');
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsVisible(top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div 
      id="first-section"
      className="relative flex w-full min-h-screen flex-col items-center justify-center 
      bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F5_100%)] 
      dark:bg-[linear-gradient(180deg,_rgba(20,_20,_20,_1)_0%,_rgba(10,_10,_10,_1)_100%)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex w-full max-w-[1400px] flex-col items-center text-center px-6 md:px-12 lg:px-16"
      >
        {/* Título con Animación Perfecta */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-extrabold leading-tight text-foreground dark:text-white 
          md:text-6xl lg:text-[70px] tracking-tight"
        >
          The Entire Legal Landscape of LATAM, One Click Away
        </motion.h1>

        {/* Subtítulo con Entrada Elegante */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-3xl text-lg font-light text-gray-600 dark:text-gray-400 md:text-xl lg:text-2xl"
        >
          Elenchus aims to harness the most comprehensive legal database in Latin America.
        </motion.p>

        {/* Slider con Experiencia Avanzada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 w-full max-w-4xl"
        >
          <Slider {...settings}>
            {[
              { value: '80K+', title: 'Latin American Case Law & Precedents', description: 'Access Latin America\'s largest curated database of case law, including judicial decisions, arbitral awards, and administrative rulings—all in one platform.' },
              { value: '20+', title: 'Academic Publications', description: 'Access academic publications, including books, articles, and blogs from leading scholars and local experts.' },
              { value: '5+', title: 'AI Models to Supercharge Your Legal Research', description: 'Elenchus integrates ChatGPT-4, Mistral, and DeepSeek within a meticulously curated Latin American legal database, ensuring accuracy and eliminating the risk of AI-generated hallucinations.' },
              { value: '1', title: 'Unified Legal Search Engine for Latin America', description: 'The first unified legal search engine for Latin America, offering structured, searchable, and AI-enhanced insights in one platform.' }
            ].map((item, index) => (
              <motion.div key={index}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer"
              >
                <Card className="flex flex-col items-center justify-center px-6 py-8 text-center 
                  dark:border-zinc-800 shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105"
                >
                  <h2 className="mb-2 text-6xl font-extrabold text-foreground dark:text-white">{item.value}</h2>
                  <h4 className="mb-2 text-xl font-semibold text-foreground dark:text-white">{item.title}</h4>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Botones con Interacciones Pro-Level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex space-x-6"
        >
          <Link href="/dashboard/main">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="px-12 py-5 text-lg font-medium shadow-lg 
              hover:shadow-xl transition-all duration-300 dark:bg-blue-500">
                Book a Demo
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}