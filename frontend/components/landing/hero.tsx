'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="relative mx-auto flex w-full min-h-screen flex-col items-center justify-center rounded-none 
      bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F5_100%)] dark:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.10)_100%)]"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center text-center px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold leading-tight text-foreground dark:text-white md:text-6xl lg:text-7xl">
          Data-Driven Legal Insights for Latin America
        </h1>
        <div className="mt-12 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search by keyword, document, case number, etc."
            className="w-full rounded-full border border-gray-300 p-5 text-lg focus:border-blue-500 focus:outline-none shadow-lg"
          />
        </div>
        <div className="mt-14 flex space-x-8">
          <Link href="/dashboard/main">
            <Button className="px-10 py-5 text-lg font-medium shadow-lg">Case Law</Button>
          </Link>
          <Link href="/dashboard/main">
            <Button
              variant="outline"
              className="px-10 py-5 text-lg font-medium dark:text-white shadow-lg"
            >
              Publications
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}