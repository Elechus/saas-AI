/* eslint-disable */
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function FooterWebsite() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative z-[3] flex flex-col items-center justify-between px-5 pb-[50px] xl:px-0">
      <div className="flex h-[1px] w-full max-w-[1170px] bg-zinc-200 dark:bg-zinc-800" />
      <div className="mx-auto mt-12 flex w-full max-w-full flex-col items-start justify-between md:flex-row xl:w-[1170px] xl:max-w-[1170px]">
        
        {/* Logo + Text */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center">
            <Image 
              src={theme === 'light' ? '/img/light/logo/logo_black.png' : '/img/dark/logo/logo_white.png'}
              alt="Elenchus Logo" 
              width={40} 
              height={40} 
            />
            <div className="ml-2">
              <h5 className="text-2xl font-bold text-foreground dark:text-white">Elenchus</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Legal Research, Data-Driven Decisions
              </p>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-row items-center justify-center space-x-8 mt-6 md:mt-0">
          <Link href="/pricing" className="text-sm font-medium text-foreground dark:text-white">
            Pricing
          </Link>
          <Link href="/account" className="text-sm font-medium text-foreground dark:text-white">
            Account
          </Link>
          <Link href="/refund-policy" className="text-sm font-medium text-foreground dark:text-white">
            Refund Policy
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium text-foreground dark:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-sm font-medium text-foreground dark:text-white">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
