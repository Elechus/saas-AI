import { Badge } from '../ui/badge';

export default function FeaturesTitle() {
  return (
    <div className="relative z-[2] flex w-full flex-col items-center bg-cover pt-[90px] md:pt-[140px] xl:pt-[180px]">
      <div className="flex max-w-[1170px] flex-col items-center justify-center px-5 md:px-10 xl:px-0">
        <div className="flex w-[stretch] flex-col">
          <div className="mx-auto flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mx-auto mb-2.5 w-max px-4 py-1 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              OUR PROCESS
            </Badge>
            <h1 className="mx-auto mb-3 text-center text-3xl font-extrabold leading-[38px] text-foreground dark:text-white md:text-[48px] md:leading-[60px] xl:text-6xl xl:leading-[70px]">
              Empowering Legal Professionals
            </h1>
            <p className="w-[96%] text-base font-normal leading-8 text-foreground dark:text-zinc-400 md:w-[80%] md:text-base md:leading-8 lg:w-[60%] xl:text-lg xl:leading-[32px]">
              Discover how our platform transforms legal research with powerful features designed 
              specifically for the complexities of Latin American jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 