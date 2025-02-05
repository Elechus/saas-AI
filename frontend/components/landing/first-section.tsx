'use client';

import numbersdark from '@/public/img/dark/numbers/image.png';
import numberslight from '@/public/img/light/numbers/image.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { HiBolt } from 'react-icons/hi2';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import FeaturesList from './features-list';

export default function FirstSection() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative z-[2] flex w-full flex-col bg-cover pt-[90px] md:pt-[100px] xl:pt-[140px]">
      <div className="flex max-w-[unset] flex-col px-5 md:px-10 xl:px-0">
        <div className="mb-10 flex w-[stretch] flex-col">
          <div className="mx-auto flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mx-auto mb-2.5 w-max px-4 py-2 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              REVOLUTIONIZING LEGAL RESEARCH IN LATIN AMERICA
            </Badge>
            <h1 className="mx-auto mb-5 w-full text-center text-3xl font-extrabold text-foreground dark:text-white md:mb-8 md:w-[100%] md:text-[48px] md:leading-[60px] lg:w-[90%] xl:w-[70%] xl:text-6xl xl:leading-[70px] 2xl:w-[60%]">
              Solving Critical Challenges in Latin American Legal Research
            </h1>
            <p className="w-[96%] text-base font-normal leading-8 text-foreground dark:text-zinc-400 md:w-[80%] md:text-base md:leading-8 lg:w-[80%] xl:w-[54%] xl:text-lg xl:leading-[32px] 2xl:text-lg 2xl:leading-[32px]">
              We're addressing the key pain points in Latin American legal research with our comprehensive digital solution, making legal intelligence accessible, reliable, and efficient.
            </p>
          </div>
        </div>
        <FeaturesList />
        <div className="mx-auto mt-5 flex min-h-[760px] w-[1170px] max-w-full flex-wrap items-center justify-center gap-5 md:flex-row lg:flex-nowrap">
          <div className="md:w-[75%] lg:w-[50%]">
            <Card className="mb-5 flex w-full flex-col items-center justify-center px-8 py-10 text-center dark:border-zinc-800 md:px-14 xl:px-32 xl:py-16">
              <h2 className="mb-4 text-8xl font-extrabold text-foreground dark:text-white">
                100%
              </h2>
              <h4 className="mb-4 text-lg font-semibold text-foreground dark:text-white">
                Digital Access
              </h4>
              <p className="text-base font-normal text-foreground dark:text-zinc-400">
                Comprehensive digitization of legal resources across Latin American jurisdictions, 
                eliminating the need for costly local counsel and ensuring efficient access to vital information.
              </p>
            </Card>
            <Card className="flex w-full flex-col items-center justify-center px-4 py-10 text-center dark:border-zinc-800 md:px-14 xl:px-32 xl:py-16">
              <h2 className="mb-4 text-8xl font-extrabold text-foreground dark:text-white">
                24/7
              </h2>
              <h4 className="mb-4 text-lg font-semibold text-foreground dark:text-white">
                Real-time Updates
              </h4>
              <p className="text-base font-normal text-foreground dark:text-zinc-400">
                Stay current with continuously updated legal content, verified translations, 
                and the latest precedents across all Latin American jurisdictions.
              </p>
            </Card>
          </div>
          <Card className="flex h-full flex-col items-center justify-stretch overflow-hidden text-center dark:border-zinc-800 md:w-[75%] lg:w-[50%]">
            <div className="mb-auto h-full px-6 pt-8 md:px-14 xl:px-32 xl:pt-16">
              <h2 className="mb-4 text-8xl font-extrabold text-foreground dark:text-white">
                360°
              </h2>
              <h4 className="mb-4 text-lg font-semibold text-foreground dark:text-white">
                Comprehensive Legal Coverage
              </h4>
              <p className="mb-6 text-base font-normal text-foreground dark:text-zinc-400">
                From arbitration to administrative law, our platform provides unified access to 
                precedents, translations, and analytics across all legal domains.
              </p>
              <Link
                href="/dashboard/main"
                className="flex items-center justify-center lg:mb-20"
              >
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-4 py-6 text-sm font-medium dark:text-white md:mb-0"
                >
                  Explore Our Solutions
                </Button>
              </Link>
            </div>
            <Image
              src={theme === 'dark' ? numbersdark.src : numberslight.src}
              width={575}
              height={317}
              alt=""
              className="-mb-0.5 mt-10 w-full max-w-[335px] md:mt-12 md:max-w-[575px] lg:mt-0"
            />
          </Card>
        </div>
        <div className="mx-auto mt-20 flex flex-col items-center justify-center md:flex-row">
          <Link className="mb-5 md:mb-0 md:me-5" href="/dashboard/main">
            <Button className="flex items-center justify-center px-4 py-6 text-sm font-medium md:mb-0">
              <HiBolt className="me-2 h-4 w-4" />
              Start Your Free Trial
            </Button>
          </Link>
          <Link href="/dashboard/main">
            <Button
              variant="outline"
              className="mb-6 flex w-full items-center justify-center px-4 py-6 text-sm font-medium dark:text-white md:mb-0 md:w-[unset]"
            >
              Schedule a Demo
            </Button>
          </Link>
        </div>
        <p className="mx-auto mt-4 px-12 text-center text-xs font-normal text-foreground dark:text-zinc-400 md:px-0 md:text-start">
          🔍 Discover how we're making Latin American legal research more transparent, efficient, and reliable.
        </p>
      </div>
    </div>
  );
}
