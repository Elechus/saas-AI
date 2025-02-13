import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useSearch } from './SearchContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

type FilterMode = 'single' | 'range';
type RangeType = 'exact' | 'month' | 'year';

export function DateFilter() {
  const { dispatch, performSearch } = useSearch();
  const [mode, setMode] = useState<FilterMode>('single');
  const [rangeType, setRangeType] = useState<RangeType>('exact');
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [selectedMonth, setSelectedMonth] = useState<number>();
  const [selectedYear, setSelectedYear] = useState<number>();
  const [yearRange, setYearRange] = useState({ from: undefined, to: undefined });

  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const renderDateSelector = () => {
    if (mode === 'single') {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="rounded-md border shadow"
              classNames={{
                month: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              }}
            />
          </PopoverContent>
        </Popover>
      );
    }

    switch (rangeType) {
      case 'exact':
        return (
          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? format(dateRange.from, "PPP") : <span>Start date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange.from}
                  onSelect={(date) => setDateRange(prev => ({ ...prev, from: date }))}
                  initialFocus
                  className="rounded-md border shadow"
                  classNames={{
                    month: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                    caption: "flex justify-center pt-1 relative items-center",
                    caption_label: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  }}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.to ? format(dateRange.to, "PPP") : <span>End date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange.to}
                  onSelect={(date) => setDateRange(prev => ({ ...prev, to: date }))}
                  initialFocus
                  className="rounded-md border shadow"
                  classNames={{
                    month: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                    caption: "flex justify-center pt-1 relative items-center",
                    caption_label: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        );

      case 'month':
        return (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Select onValueChange={(value) => setSelectedYear(Number(value))}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year.toString()}
                      className="text-zinc-900 dark:text-zinc-50"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setSelectedMonth(Number(value))}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem 
                      key={month} 
                      value={index.toString()}
                      className="text-zinc-900 dark:text-zinc-50"
                    >
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 'year':
        return (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Select onValueChange={(value) => setYearRange(prev => ({ ...prev, from: Number(value) }))}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="From Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year.toString()}
                      className="text-zinc-900 dark:text-zinc-50"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setYearRange(prev => ({ ...prev, to: Number(value) }))}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="To Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year.toString()}
                      className="text-zinc-900 dark:text-zinc-50"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
    }
  };

  const handleApplyFilter = () => {
    if (mode === 'single' && date) {
      dispatch({
        type: 'SET_FILTER',
        payload: {
          sentence_mongodate: {
            $eq: date.toISOString()
          }
        }
      });
    } else if (mode === 'range') {
      let fromDate, toDate;

      if (rangeType === 'exact' && dateRange.from && dateRange.to) {
        fromDate = dateRange.from;
        toDate = dateRange.to;
      } else if (rangeType === 'month' && selectedYear && selectedMonth !== undefined) {
        fromDate = new Date(selectedYear, selectedMonth, 1);
        toDate = new Date(selectedYear, selectedMonth + 1, 0);
      } else if (rangeType === 'year' && yearRange.from && yearRange.to) {
        fromDate = new Date(yearRange.from, 0, 1);
        toDate = new Date(yearRange.to, 11, 31);
      }

      if (fromDate && toDate) {
        dispatch({
          type: 'SET_FILTER',
          payload: {
            sentence_mongodate: {
              $gte: fromDate.toISOString(),
              $lte: toDate.toISOString()
            }
          }
        });
      }
    }
    performSearch();
  };

  return (
    <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      <h3 className="mb-4 font-semibold text-foreground dark:text-white">Sentence Date Filter</h3>
      
      <RadioGroup
        value={mode}
        onValueChange={(value: FilterMode) => setMode(value)}
        className="mb-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="single" id="single" />
          <Label htmlFor="single">Single Date</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="range" id="range" />
          <Label htmlFor="range">Date Range</Label>
        </div>
        <hr className="my-1" />
      </RadioGroup>

      {mode === 'range' && (
        <RadioGroup
          value={rangeType}
          onValueChange={(value: RangeType) => setRangeType(value)}
          className="mb-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="exact" id="exact" />
            <Label htmlFor="exact">Exact Dates</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="month" id="month" />
            <Label htmlFor="month">Month Range</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="year" id="year" />
            <Label htmlFor="year">Year Range</Label>
          </div>
          <hr className="my-1" />
        </RadioGroup>
      )}

      {renderDateSelector()}

      <Button 
        className="mt-4 w-full"
        onClick={handleApplyFilter}
        disabled={
          mode === 'single' 
            ? !date 
            : rangeType === 'exact' 
              ? !dateRange.from || !dateRange.to
              : rangeType === 'month'
                ? !selectedYear || selectedMonth === undefined
                : !yearRange.from || !yearRange.to
        }
      >
        Apply Filter
      </Button>
    </div>
  );
} 