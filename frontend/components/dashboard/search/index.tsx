/*eslint-disable*/
'use client';

import DashboardLayout from '@/components/layout';
import { Database } from '@/types/types_db';
import { User } from '@supabase/supabase-js';
import DocumentSearchList from './DocumentSearchList';
import QuickFilterButtons from './QuickFilterButtons';
import SearchBar from './SearchBar';
import { SearchProvider } from './SearchContext';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null | any;
  userDetails: { [x: string]: any } | null | any;
}

export default function Search(props: Props) {
  const handleSearch = (query: string) => {
    // Implement search logic here
    console.log('Searching for:', query);
  };

  return (
    <DashboardLayout
      userDetails={props.userDetails}
      user={props.user}
      products={props.products}
      subscription={props.subscription}
      title="AI-Powered Search"
      description="Search for International Law and Arbitration"
    >
      <SearchProvider>
        <div className="relative w-full flex-col md:mt-0 xl:mt-0">
          <div className="mx-auto w-full max-w-[1200px] flex-col justify-center">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground dark:text-white">
                Elenchus
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                AI-Powered Search for jurisprudence
              </p>
            </div>

            <SearchBar />

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300 dark:border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  Explore
                </span>
              </div>
            </div>

            <QuickFilterButtons />
            
            <DocumentSearchList />
          </div>
        </div>
      </SearchProvider>
    </DashboardLayout>
  );
}
