/* eslint-disable */
'use client';

import { Card } from '../ui/card';
import { HiOutlineDocumentText, HiOutlineMagnifyingGlass, HiOutlineLightBulb } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowItWorksSection() {
  // Hook para detectar si la sección está en la vista
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecutará solo una vez
    threshold: 0.2, // Se activará cuando al menos el 20% del elemento esté visible
  });

  return (
    <div
      ref={ref} // Se asigna la referencia a la sección
      className="relative z-[2] flex w-full flex-col items-center bg-cover pt-40 pb-40 md:pt-48 xl:pt-56 xl:pb-56"
      id="how-it-works"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex w-full max-w-[1600px] flex-col items-center justify-center px-6 md:px-10 xl:px-0"
      >
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-6xl font-extrabold leading-[64px] text-foreground dark:text-white md:text-[64px] md:leading-[72px] xl:text-7xl xl:leading-[84px]"
        >
          How It Works?
        </motion.h1>

        {/* Steps Grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-3 xl:mt-20">
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="group flex w-full flex-col items-center p-12 text-center dark:border-zinc-800 shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl">
              <HiOutlineDocumentText className="mb-6 h-16 w-16 text-foreground dark:text-white transition-transform duration-300 group-hover:scale-110" />
              <h5 className="mb-4 text-2xl font-semibold text-foreground dark:text-white">
                Data Collection & Curation
              </h5>
              <p className="text-lg font-light text-foreground dark:text-gray-400">
                Through partnerships with local lawyers and institutions, we digitize, translate, and enhance legal data—ensuring accuracy, accessibility, and an optimized search experience.
              </p>
            </Card>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="group flex w-full flex-col items-center p-12 text-center dark:border-zinc-800 shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl">
              <HiOutlineMagnifyingGlass className="mb-6 h-16 w-16 text-foreground dark:text-white transition-transform duration-300 group-hover:scale-110" />
              <h5 className="mb-4 text-2xl font-semibold text-foreground dark:text-white">
                Smart Search & Discovery
              </h5>
              <p className="text-lg font-light text-foreground dark:text-gray-400">
                Easily explore Latin America’s most comprehensive legal database using filters by jurisdiction, subject matter, or keywords to quickly find relevant judicial, arbitral, and administrative decisions.
              </p>
            </Card>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="group flex w-full flex-col items-center p-12 text-center dark:border-zinc-800 shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl">
              <HiOutlineLightBulb className="mb-6 h-16 w-16 text-foreground dark:text-white transition-transform duration-300 group-hover:scale-110" />
              <h5 className="mb-4 text-2xl font-semibold text-foreground dark:text-white">
                AI-Powered Insights & Analysis
              </h5>
              <p className="text-lg font-light text-foreground dark:text-gray-400">
                Review precedents at scale using AI tools like ChatGPT-4, Mistral, and DeepSeek. Get predictive legal analytics to strengthen your legal strategy and decision-making.
              </p>
            </Card>
          </motion.div>

        </div>

        {/* OUR PROCESS BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 xl:mt-24"
        >
          <button className="px-10 py-5 text-lg font-medium tracking-wide text-foreground bg-transparent border border-gray-300 rounded-lg dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            OUR PROCESS
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
