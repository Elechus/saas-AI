'use client';

import Faq from '@/components/landing/faq';
import InnerContent from '@/components/layout/innerContent';
import NavbarFixed from '@/components/navbar/NavbarFixed';
import { Card } from '@/components/ui/card';
import { getErrorRedirect } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { User } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { FooterWebsite } from '../footer/FooterWebsite';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface Props {
  user: User | null | undefined;
  products: any[];
  subscription: any | null;
}

export default function Pricing({ user, products, subscription }: Props) {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleCheckout = async (price: any) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push('/dashboard/signin/signup');
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(price, currentPath || undefined);

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath || '',
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  const handleContactUs = () => {
    router.push('/contact');
  };

  return (
    <div className="relative w-full flex-col overflow-hidden bg-white dark:bg-zinc-950 pt-[40px] md:pt-[140px]" id="pricing">
      <NavbarFixed />
      <InnerContent extra="z-[1] max-w-full md:max-w-full xl:max-w-[1170px]">
        <div className="mb-16 w-full flex-col px-5 md:px-0">
          <div className="flex flex-col items-center justify-center px-5 text-start md:px-10 xl:px-0">
            <Badge
              variant="outline"
              className="mb-4 w-max px-5 py-3 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              PRICING PLANS
            </Badge>
            <h1 className="w-full text-center text-[36px] font-extrabold leading-[44px] text-foreground dark:text-white md:w-[90%] md:text-[44px] md:leading-[52px] lg:w-[80%] xl:w-[85%] xl:text-[52px] xl:leading-[60px] 2xl:w-[75%]">
              Choose the right pricing plan for you and your business
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          {/* Essentials Plan */}
          <Card className="w-full max-w-3xl p-20 bg-gray-100 dark:bg-zinc-800 text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-xl">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800 dark:text-white">Elenchus Core</h2>
            <div className="bg-gray-200 dark:bg-zinc-700 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Essentials</h3>
              <Button 
                onClick={handleContactUs} 
                className="mb-4 w-full bg-black text-white hover:bg-gray-800 transition-all duration-200"
              >
                Contact Us
              </Button>
            </div>
            <ul className="text-left space-y-6 text-gray-700 dark:text-gray-200 mt-8">
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-500 dark:text-gray-400" />
                Unlimited access to Latin American case law
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-500 dark:text-gray-400" />
                Unlimited access to academic publications
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-500 dark:text-gray-400" />
                Advanced search engine with filters
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-500 dark:text-gray-400" />
                Leverage built-in AI models
              </li>
            </ul>
          </Card>

          {/* Premium Plan */}
          <Card className="w-full max-w-3xl p-20 bg-black text-white text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105 dark:hover:bg-zinc-900 rounded-xl">
            <h2 className="text-4xl font-semibold mb-8">Premium AI</h2>
            <div className="bg-zinc-800 dark:bg-zinc-700 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4">Premium</h3>
              <Button 
                onClick={handleContactUs} 
                className="mb-4 w-full bg-white text-black hover:bg-gray-50 dark:bg-gray-200 dark:hover:bg-gray-300 transition-all duration-200"
              >
                Contact Us
              </Button>
            </div>
            <ul className="text-left space-y-6 mt-8 text-gray-990 dark:text-gray-200">
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-400 dark:text-gray-300" />
                Includes Everything in Essentials, Plus:
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-400 dark:text-gray-300" />
                Access to premium AI models
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-400 dark:text-gray-300" />
                Priority customer support
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-400 dark:text-gray-300" />
                AI-driven precedent analysis
              </li>
              <li className="flex items-center">
                <HiOutlineCheckCircle className="mr-3 text-gray-400 dark:text-gray-300" />
                Advanced statistical modeling
              </li>
            </ul>
          </Card>
        </div>
        <p className="mt-12 text-lg text-gray-500 dark:text-gray-400 text-center">
          14-Day Money Back Guarantee
        </p>
      </InnerContent>
      <Faq />
      <FooterWebsite />
    </div>
  );
}
