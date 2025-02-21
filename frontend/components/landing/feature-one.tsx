{/*
'use client';

import InnerContent from '@/components/layout/innerContent';
import imagedark from '@/public/img/dark/features/feature-one.png';
import image from '@/public/img/light/features/feature-one.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function FeatureOne() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-cover pb-[100px] pt-[100px] md:pb-[140px] md:pt-[140px]">
      <InnerContent>
        <div className="justfify-between flex max-w-[1170px] flex-col items-center gap-[50px] px-5 md:px-10 lg:flex-row lg:items-start xl:px-0">
          <div className="my-auto flex max-w-full flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="mb-3.5 w-max px-4 py-2 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              STEP 1: DATA COLLECTION
            </Badge>
            <h1 className="mb-5 w-full max-w-full text-center text-[28px] font-extrabold leading-10 text-foreground dark:text-white md:w-[70%] md:max-w-[unset] md:text-[36px] md:leading-[50px] lg:w-[90%] lg:text-left xl:text-[42px] xl:leading-[52px]">
              A Decentralized, Collaborative Model
            </h1>
            <p className="mb-8 w-full text-center text-base font-normal leading-8 text-foreground dark:text-zinc-400 md:w-[80%] lg:w-[100%] lg:text-left">
              We leverage a network of local legal experts and strategic partnerships to build 
              the most comprehensive legal database in Latin America. Our collaborative approach 
              ensures both depth and accuracy in legal information across jurisdictions.
            </p>
            <div className="mb-0 flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 lg:mb-8 lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-zinc-800">
                  <svg className="h-5 w-5 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">Local Legal Expertise</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-zinc-800">
                  <svg className="h-5 w-5 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground dark:text-white">Strategic Partnerships</span>
              </div>
            </div>
          </div>
          <Image
            src={theme === 'dark' ? imagedark : image}
            width={1150}
            height={1150}
            alt=""
            className="mt-5 w-full md:mt-12 lg:mt-0 lg:w-[415px] xl:w-[575px]"
          />
        </div>
      </InnerContent>
    </div>
  );
}
*/}