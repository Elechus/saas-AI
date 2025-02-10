/*eslint-disable*/
'use client';

import DashboardLayout from '@/components/layout';
import { Database } from '@/types/types_db';
import { User } from '@supabase/supabase-js';
import DocumentSearchList from './DocumentSearchList';
import QuickFilterButtons from './QuickFilterButtons';
import SearchBar from './SearchBar';
import { SearchProvider } from './SearchContext';
import StickyHeader from './StickyHeader';

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
          <StickyHeader />
          <div className="mx-auto w-full max-w-[1200px] flex-col justify-center">
            <DocumentSearchList />
          </div>
        </div>
      </SearchProvider>
    </DashboardLayout>
  );
}
