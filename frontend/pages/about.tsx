import React, { useState, useEffect } from 'react';
import NavbarFixed from '@/components/navbar/NavbarFixed';
import { FooterWebsite } from '@/components/footer/FooterWebsite';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';

const missionData = [
  {
    title: "Democratizing Access to Legal Information in Latin America",
    description:
      "We digitize, curate, and enrich Latin American legal data, centralizing judicial, arbitral, and administrative decisions to ensure accessible, accurate, and efficient legal research.",
  },
  {
    title: "Driving Legal Evolution Through Dialogue",
    description:
      "We foster legal evolution by connecting lawyers, judges, arbitrators, and policymakers. Our platform enables dialogue, comparative analysis, and data-driven legal progress across Latin America.",
  },
  {
    title: "Enhancing Transparency and Accountability",
    description:
      "Our platform empowers legal professionals to scrutinize judicial and administrative decisions, holding public officials and judges accountable. We contribute to a more just, predictable, and reliable legal system.",
  },
  {
    title: "Strengthening Institutional Frameworks and Promoting Legal Predictability",
    description:
      "We use AI and data analytics to enhance legal predictability, identifying patterns and trends that help professionals anticipate outcomes, reduce uncertainty, and strengthen institutional integrity.",
  },
  {
    title: "Promoting Economic Growth and Sustainable Development",
    description:
      "A transparent and predictable legal system is key to economic growth. By strengthening legal security, we foster investor confidence, attract investment, and expand trade.",
  },
  {
    title: "Strengthening Human Rights Through Legal Transparency",
    description:
      "By centralizing case law, we provide critical insights into human rights enforcement across Latin America, enabling legal professionals and policymakers to take action.",
  },
];

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState('light');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % missionData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + missionData.length) % missionData.length);
  };

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white">
      <div className="relative z-50">
        {isClient && <NavbarFixed toggleTheme={toggleTheme} currentTheme={theme} />}
      </div>

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-zinc-700 dark:to-zinc-900 opacity-100"></div>

        <div className="absolute inset-0 bg-[url('/images/subtle-texture.png')] opacity-20 dark:opacity-15"></div>

        <h1 className="relative z-10 text-6xl md:text-7xl font-extrabold drop-shadow-lg leading-tight tracking-tight text-gray-900 dark:text-white">
          Who We Are & How We’re Transforming <br className="hidden md:block" /> Legal Research in LATAM
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 relative z-10 max-w-3xl text-center text-2xl leading-relaxed text-gray-800 dark:text-gray-300 space-y-6"
        >
          <p>
            Elenchus revolutionizes how legal professionals navigate Latin American law.
            Using cutting-edge technology and deep legal expertise, we structure judicial, arbitral,
            and administrative precedents—empowering clients with data-driven insights.
          </p>

          <p>
            Our AI-powered tools enhance transparency, predictability, and security. More than a research platform,
            Elenchus fosters legal harmonization, accountability, and institutional integrity.
          </p>

          <p>
            Whether you're a law firm, corporate legal team, government, NGO, or academic institution,
            Elenchus is your trusted partner in legal intelligence and innovation.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 px-12 py-4 text-2xl font-medium bg-black dark:bg-white text-white dark:text-black rounded-full shadow-md hover:opacity-80 transition duration-300"
        >
          Learn More
        </motion.button>
      </motion.section>

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-50 dark:bg-zinc-900 py-24">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-12">
          Our Mission
        </h2>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-12 md:p-16 bg-white dark:bg-zinc-800 rounded-3xl shadow-lg text-center max-w-3xl mx-auto border border-gray-200 dark:border-zinc-700"
            >
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {missionData[index].title}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {missionData[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <button className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg hover:scale-110 transition-all" onClick={prevSlide}>
            ◀
          </button>

          <button className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg hover:scale-110 transition-all" onClick={nextSlide}>
            ▶
          </button>
        </div>
      </section>

      <FooterWebsite />
    </div>
  );
}
