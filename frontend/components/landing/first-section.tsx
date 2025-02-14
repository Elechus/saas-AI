'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FirstSection() {
  const { theme } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F5_100%)] dark:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.10)_100%)]">
      <div className="flex w-full max-w-[1200px] flex-col items-center text-center px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold leading-tight text-foreground dark:text-white md:text-6xl lg:text-7xl">
          The Entire Legal Landscape of LATAM, One Click Away
        </h1>
        <p className="mt-4 text-lg font-normal leading-7 text-foreground dark:text-zinc-400 md:text-xl lg:text-2xl">
          Elenchus aims to harness the most comprehensive legal database in Latin America
        </p>
        <Slider {...settings} className="mt-10 w-full max-w-3xl">
          <Card className="flex flex-col items-center justify-center px-6 py-8 text-center dark:border-zinc-800 shadow-lg">
            <h2 className="mb-2 text-6xl font-extrabold text-foreground dark:text-white">80 K+</h2>
            <h4 className="mb-2 text-xl font-semibold text-foreground dark:text-white">Latin American Case Law & Precedents</h4>
            <p className="text-base font-normal text-foreground dark:text-zinc-400">
              Access Latin America's largest curated database of case law, including judicial decisions, arbitral awards, and administrative rulings—all in one platform.
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center px-6 py-8 text-center dark:border-zinc-800 shadow-lg">
            <h2 className="mb-2 text-6xl font-extrabold text-foreground dark:text-white">20+</h2>
            <h4 className="mb-2 text-xl font-semibold text-foreground dark:text-white">Academic Publications</h4>
            <p className="text-base font-normal text-foreground dark:text-zinc-400">
              Access academic publications, including books, articles, and blogs from leading scholars and local experts.
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center px-6 py-8 text-center dark:border-zinc-800 shadow-lg">
            <h2 className="mb-2 text-6xl font-extrabold text-foreground dark:text-white">5+</h2>
            <h4 className="mb-2 text-xl font-semibold text-foreground dark:text-white">AI Models to Supercharge Your Legal Research</h4>
            <p className="text-base font-normal text-foreground dark:text-zinc-400">
              Elenchus integrates ChatGPT-4, Mistral, and DeepSeek within a meticulously curated Latin American legal database, ensuring accuracy and eliminating the risk of AI-generated hallucinations.
            </p>
          </Card>
          <Card className="flex flex-col items-center justify-center px-6 py-8 text-center dark:border-zinc-800 shadow-lg">
            <h2 className="mb-2 text-6xl font-extrabold text-foreground dark:text-white">1</h2>
            <h4 className="mb-2 text-xl font-semibold text-foreground dark:text-white">Unified Legal Search Engine for Latin America</h4>
            <p className="text-base font-normal text-foreground dark:text-zinc-400">
              The first unified legal search engine for Latin America, offering structured, searchable, and AI-enhanced insights in one platform.
            </p>
          </Card>
        </Slider>
        <div className="mt-12 flex flex-col items-center justify-center md:flex-row">
          <Link className="mb-4 md:mb-0 md:mr-4" href="/dashboard/main">
            <Button className="px-10 py-5 text-lg font-medium shadow-lg">Book a Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}