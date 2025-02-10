'use client';

import { Input } from '@/components/ui/input';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { useSearch } from './SearchContext';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect } from 'react';

interface SearchBarProps {
  isCondensed?: boolean;
}

export default function SearchBar({ isCondensed }: SearchBarProps) {
  const { dispatch, performSearch } = useSearch();
  const debouncedSearch = useDebounce(performSearch, 300);

  const handleSearch = (value: string) => {
    dispatch({ type: 'SET_QUERY', payload: value });
    debouncedSearch();
  };

  return (
    <div className="relative flex w-full items-center">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search by keyword, document, case number, etc."
          className={`w-full rounded-full border-zinc-300 pl-12 pr-24 dark:border-zinc-700 ${
            isCondensed ? 'h-10 text-base' : 'h-14 text-lg'
          }`}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <HiMagnifyingGlass 
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 ${
            isCondensed ? 'h-5 w-5' : 'h-6 w-6'
          }`} 
        />
      </div>
      <div className="absolute right-4 flex items-center space-x-2">
        <button className="rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <IoSettingsOutline className={isCondensed ? 'h-5 w-5' : 'h-6 w-6'} />
        </button>
        <button className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium dark:bg-zinc-800">
          EN
        </button>
      </div>
    </div>
  );
} 