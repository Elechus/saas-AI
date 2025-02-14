/* eslint-disable */
'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import Image from 'next/image';

export default function AdminNavbar(props) {
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
    setScrolled(window.scrollY > 1);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed left-[50%] top-0 z-[49] mx-auto flex w-full translate-x-[-50%] translate-y-0 flex-col items-center border-gray-300 bg-white leading-[25.6px] dark:border-white dark:bg-zinc-950 xl:justify-center`}
    >
      <div className="mb-0 flex w-[calc(100vw_-_4%)] flex-row items-center justify-between gap-[40px] py-5 sm:px-6 md:w-[calc(100vw_-_4%)] md:px-2.5 lg:w-[100vw] lg:px-3 xl:w-[calc(100vw_-_250px)] xl:pl-3 2xl:w-[1200px]">
        <Link className="flex items-center justify-center" href="/">
          <div className="flex items-center justify-center">
            <div className="me-2 flex h-[40px] w-[40px] items-center justify-center rounded-md">
              <Image
                src={theme === 'light' ? '/img/light/logo/logo_black.png' : '/img/dark/logo/logo_white.png'}
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div>
              <h5 className="text-2xl font-bold leading-5 text-foreground dark:text-white">
                Elenchus
              </h5>
              <p className="text-sm text-foreground dark:text-white">
                Legal Research, Data-Driven Decisions
              </p>
            </div>
          </div>
        </Link>

        <div className="flex items-center">
          <Link className="my-auto mr-[30px] hidden text-sm font-medium text-foreground dark:text-white lg:block" href="/solutions">
            Solutions
          </Link>
          <Link className="my-auto mr-[30px] hidden text-sm font-medium text-foreground dark:text-white lg:block" href="/pricing">
            Pricing
          </Link>
          <Link className="my-auto mr-[30px] hidden text-sm font-medium text-foreground dark:text-white lg:block" href="/about">
            About Us
          </Link>
          <Link className="my-auto mr-[30px] hidden text-sm font-medium text-foreground dark:text-white lg:block" href="#faqs">
            FAQs
          </Link>

          <Button
            variant="outline"
            className="me-3 flex min-h-10 min-w-10 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-foreground dark:border-zinc-800 dark:text-white"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'light' ? (
              <HiOutlineMoon className="h-4 w-4 stroke-2" />
            ) : (
              <HiOutlineSun className="h-5 w-5 stroke-2" />
            )}
          </Button>
          <span className="text-sm font-medium text-foreground dark:text-white">EN</span>
          <Link href="/login" className="ml-4 text-sm font-medium text-foreground dark:text-white">
            Login
          </Link>
          <Link href="/book-demo" className="ml-4">
            <Button variant="outline" className="py-2 px-4 dark:text-white">
              BOOK A DEMO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
