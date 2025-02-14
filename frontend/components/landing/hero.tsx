'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="relative mx-auto mt-24 flex w-full max-w-[1600px] flex-col content-center items-center rounded-lg 
   bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F5_100%)] dark:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.10)_100%)] md:mt-[100px]
   md:rounded-2xl lg:mt-[140px] p-24"
    >
      <div className="flex w-full">
        <div className="3xl:pt-[200px] mb-0 flex w-full max-w-full flex-row content-center items-center justify-between pt-24 lg:pt-[140px]">
          <div className="mx-auto flex w-full flex-col text-center">
            <h1 className="3xl:text-6xl z-[40] mx-auto mb-6 mt-4 max-w-full text-3xl font-bold leading-[48px] text-foreground dark:text-white md:text-[50px] md:leading-[68px] lg:text-[50px] lg:leading-[76px]">
              Data-Driven Legal Insights for Latin America
            </h1>
            <div className="mx-auto mb-12 w-full max-w-md">
              <input
                type="text"
                placeholder="Search by keyword, document, case number, etc."
                className="w-full rounded-md border border-gray-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mx-auto flex items-center justify-center space-x-12">
              <Link href="/dashboard/main">
                <Button className="mb-12 flex items-center justify-center px-10 py-5 text-sm font-medium md:mb-0">
                  Case Law
                </Button>
              </Link>
              <Link href="/dashboard/main">
                <Button
                  variant="outline"
                  className="mb-12 flex items-center justify-center px-10 py-5 text-sm font-medium dark:text-white md:mb-0"
                >
                  Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
