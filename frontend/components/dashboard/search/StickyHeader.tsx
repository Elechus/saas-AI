'use client';

import { useEffect, useState, useRef } from 'react';
import SearchBar from './SearchBar';
import QuickFilterButtons from './QuickFilterButtons';
import { motion } from 'framer-motion';
import { useDebounce } from '@/hooks/useDebounce';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isAnimatingRef = useRef(false);
  const debouncedSetIsScrolled = useDebounce((value: boolean) => {
    if (!isAnimatingRef.current) {
      setIsScrolled(value);
    }
  }, 50);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      debouncedSetIsScrolled(scrollPosition > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debouncedSetIsScrolled]);

  const handleAnimationStart = () => {
    isAnimatingRef.current = true;
  };

  const handleAnimationComplete = () => {
    isAnimatingRef.current = false;
  };

  return (
    <motion.div 
      className="sticky top-0 z-50"
      animate={{
        height: isScrolled ? '64px' : 'auto'
      }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80" />
      <div className="relative">
        {/* Expanded Header */}
        <motion.div
          className="origin-top"
          initial={false}
          animate={{
            opacity: isScrolled ? 0 : 1,
            scale: isScrolled ? 0.95 : 1,
            visibility: isScrolled ? 'hidden' : 'visible',
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          <div className="space-y-6 px-6 py-4">
            <div className="text-center">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground dark:text-white">
                Elenchus
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                AI-Powered Search for jurisprudence
              </p>
            </div>
            <SearchBar />
            <QuickFilterButtons />
          </div>
        </motion.div>

        {/* Condensed Header */}
        <motion.div
          className="absolute left-0 top-0 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -20,
            visibility: isScrolled ? 'visible' : 'hidden',
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut'
          }}
        >
          <div className="flex items-center gap-4 px-6 py-3">
            <div className="shrink-0">
              <h2 className="text-xl font-bold text-foreground dark:text-white">
                Elenchus
              </h2>
            </div>
            <div className="flex-1">
              <SearchBar isCondensed />
            </div>
            <div className="shrink-0">
              <QuickFilterButtons isCondensed />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 