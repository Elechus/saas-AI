{/*
'use client';

import InnerContent from '@/components/layout/innerContent';
import imagedark from '@/public/img/dark/features/feature-two.png';
import image from '@/public/img/light/features/feature-two.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function FeatureTwo() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-cover">
      <InnerContent>
        <div className="flex max-w-[1170px] flex-col-reverse items-center justify-between gap-[70px] px-5 md:px-10 lg:flex-row lg:items-start xl:px-0">
          <Image
            src={theme === 'dark' ? imagedark : image}
            width={1150}
            height={1150}
            alt=""
            className="mt-5 w-full md:mt-12 lg:mt-0 lg:w-[415px] xl:w-[575px]"
          />
          <div className="my-auto flex max-w-full flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="mb-3.5 w-max px-4 py-2 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              STEP 2: DATA CURATION
            </Badge>
            <h1 className="mb-5 w-full max-w-full text-center text-[28px] font-extrabold leading-10 text-foreground dark:text-white md:w-[70%] md:max-w-[unset] md:text-[36px] md:leading-[50px] lg:w-full lg:text-left xl:text-[42px] xl:leading-[52px]">
              Digitization and Multilingual Accessibility
            </h1>
            <p className="mb-8 w-full text-center text-base font-normal leading-8 text-foreground dark:text-zinc-400 md:px-14 lg:w-[97%] lg:px-0 lg:text-left">
              Transform raw legal data into accessible digital formats with professional translations, 
              making complex legal information easily navigable for users across borders and languages.
            </p>
            <div className="mb-0 flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 lg:mb-8 lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-zinc-800">
                  <svg className="h-5 w-5 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">Multilingual Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-zinc-800">
                  <svg className="h-5 w-5 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">Intuitive Search</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-zinc-800">
                  <svg className="h-5 w-5 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">Digital Archives</span>
              </div>
            </div>
          </div>
        </div>
      </InnerContent>
    </div>
  );
}
*/}