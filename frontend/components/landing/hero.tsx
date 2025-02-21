'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { HiOutlineSearch } from 'react-icons/hi';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div
      className="relative mx-auto flex w-full min-h-screen flex-col items-center justify-center 
      bg-[linear-gradient(180deg,_#ffffff_0%,_#f8f8f8_100%)] 
      dark:bg-[linear-gradient(180deg,_rgba(25,_25,_25,_1)_0%,_rgba(15,_15,_15,_1)_100%)]"
    >
      {/* Contenedor principal con animación de entrada */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex w-full max-w-[1200px] flex-col items-center text-center px-6 md:px-12 lg:px-16"
      >
        {/* Título con animación de entrada */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-extrabold leading-tight text-foreground dark:text-white md:text-6xl lg:text-[72px] tracking-tight"
        >
          Data-Driven Legal Insights for Latin America
        </motion.h1>

        {/* Subtítulo con animación sutil */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl"
        >
          The most comprehensive legal database in Latin America, enhanced with AI for unparalleled research capabilities.
        </motion.p>

        {/* Campo de búsqueda con fondo negro en modo oscuro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 w-full max-w-2xl relative"
        >
          <input
            type="text"
            placeholder="Search by keyword, document, case number..."
            className="w-full rounded-lg border border-gray-300 bg-white p-5 text-lg shadow-md 
            transition-all duration-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 
            focus:outline-none dark:bg-black dark:border-gray-700 dark:text-white dark:focus:ring-gray-600"
          />
          <div className="absolute inset-y-0 right-5 flex items-center">
            <HiOutlineSearch className="text-gray-500 dark:text-gray-400 h-6 w-6" />
          </div>
        </motion.div>

        {/* Botones con hover animado y fondo blanco en modo oscuro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex space-x-6"
        >
          <Link href="/dashboard/main">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="px-10 py-5 text-lg font-medium shadow-md 
              hover:shadow-lg transition-all duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Case Law
              </Button>
            </motion.div>
          </Link>
          <Link href="/dashboard/main">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="px-10 py-5 text-lg font-medium dark:bg-white dark:text-black shadow-md 
                border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-200 
                transition-all duration-300"
              >
                Publications
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
