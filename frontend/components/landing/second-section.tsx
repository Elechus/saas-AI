// eslint-disabled

import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export default function SecondSection() {
  return (
    <div
      className="relative z-[2] flex w-full flex-col items-center bg-cover pt-[90px] md:pt-[140px] xl:pt-[180px]"
      id="features"
    >
      <div className="flex max-w-[1170px] flex-col items-center justify-center px-0 md:px-10 xl:px-0">
        <div className="flex w-[stretch] flex-col">
          <div className="mx-auto flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mx-auto mb-2.5 w-max px-4 py-2 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              OUR INNOVATIVE SOLUTIONS
            </Badge>
            <h1 className="mx-auto text-center text-3xl font-extrabold leading-[38px] text-foreground dark:text-white md:text-[48px] md:leading-[60px] xl:text-6xl xl:leading-[70px]">
              Transforming Legal Research
            </h1>
          </div>
        </div>
        <div className="flex w-[86%] max-w-full flex-col items-center justify-center gap-6 pt-10 md:w-[76%] md:pt-[60px] lg:w-[100%]">
          {/* First row - 2 cards */}
          <div className="flex w-full flex-col gap-6 lg:flex-row">
            <Card className="flex w-full flex-col p-8 dark:border-zinc-800 lg:w-1/2">
              <h5 className="mb-3 text-center text-lg font-semibold text-foreground dark:text-white md:text-left xl:text-xl">
                1. Comprehensive & Tailored Legal Search
              </h5>
              <p className="text-base font-normal text-foreground dark:text-zinc-400 md:text-base md:leading-8">
                A specialized search engine designed specifically for Latin American legal systems, 
                offering extensive coverage across multiple areas of law, not just niche topics.
              </p>
            </Card>

            <Card className="flex w-full flex-col p-8 dark:border-zinc-800 lg:w-1/2">
              <h5 className="mb-3 text-center text-lg font-semibold text-foreground dark:text-white md:text-left xl:text-xl">
                2. Up-to-Date, Accurate Legal Information
              </h5>
              <p className="text-base font-normal text-foreground dark:text-zinc-400 md:text-base md:leading-8">
                Regularly updated databases with accurate translations and verified legal texts, 
                ensuring users have access to the most current laws and precedents.
              </p>
            </Card>
          </div>

          {/* Second row - 3 cards */}
          <div className="flex w-full flex-col gap-6 lg:flex-row">
            <Card className="flex w-full flex-col p-8 dark:border-zinc-800 lg:w-1/3">
              <h5 className="mb-3 text-center text-lg font-semibold text-foreground dark:text-white md:text-left xl:text-xl">
                3. Streamlined Access to Legal Data
              </h5>
              <p className="text-base font-normal text-foreground dark:text-zinc-400 md:text-base md:leading-8">
                A digitized platform that centralizes legal texts and precedents, making it easy to find, 
                translate, and analyze legal information from across LATAM.
              </p>
            </Card>

            <Card className="flex w-full flex-col p-8 dark:border-zinc-800 lg:w-1/3">
              <h5 className="mb-3 text-center text-lg font-semibold text-foreground dark:text-white md:text-left xl:text-xl">
                4. Cost-Effective Access to Local Insights
              </h5>
              <p className="text-base font-normal text-foreground dark:text-zinc-400 md:text-base md:leading-8">
                Empowers foreign lawyers and non-lawyers to conduct thorough legal research independently, 
                streamlining the process of consulting with local counsel. This reduces unnecessary costs 
                and questions.
              </p>
            </Card>

            <Card className="flex w-full flex-col p-8 dark:border-zinc-800 lg:w-1/3">
              <h5 className="mb-3 text-center text-lg font-semibold text-foreground dark:text-white md:text-left xl:text-xl">
                5. Advanced Analytics & Predictive Insights
              </h5>
              <p className="text-base font-normal text-foreground dark:text-zinc-400 md:text-base md:leading-8">
                Advanced data analytics tools to track precedents and patterns in judicial and administrative 
                decisions, allowing lawyers to better predict legal outcomes.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
