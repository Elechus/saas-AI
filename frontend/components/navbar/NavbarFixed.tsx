/* eslint-disable */
'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import Image from 'next/image';

export default function AdminNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  const changeNavbar = () => {
    setScrolled(window.scrollY > 50);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md dark:bg-zinc-900' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        {/* LOGO + TEXTO */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={theme === 'light' ? '/img/light/logo/logo_black.png' : '/img/dark/logo/logo_white.png'}
            alt="Elenchus Logo"
            width={50}
            height={50}
          />
          <div>
            <h5 className="text-2xl font-bold text-foreground dark:text-white">Elenchus</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">Legal Research, Data-Driven Decisions</p>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-foreground dark:text-white">
          <Link href="/solutions" className="hover:text-gray-500 transition-all">Solutions</Link>
          <Link href="/pricing" className="hover:text-gray-500 transition-all">Pricing</Link>
          <Link href="/about" className="hover:text-gray-500 transition-all">About Us</Link>
          <Link href="#faqs" className="hover:text-gray-500 transition-all">FAQs</Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            className="flex h-10 w-10 items-center justify-center rounded-full border-zinc-200 dark:border-zinc-800"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'light' ? (
              <HiOutlineMoon className="h-5 w-5 stroke-2" />
            ) : (
              <HiOutlineSun className="h-6 w-6 stroke-2" />
            )}
          </Button>
          <span className="hidden text-sm font-medium text-foreground dark:text-white md:block">EN</span>
          <Link href="/login" className="hidden text-sm font-medium text-foreground dark:text-white md:block">Login</Link>
          <Link href="/book-demo">
            <Button variant="outline" className="px-5 py-2 text-sm font-medium">BOOK A DEMO</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
