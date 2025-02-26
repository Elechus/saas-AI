/*eslint-disable*/

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Badge } from '../ui/badge';

export default function Home() {
  return (
    <div
      className="relative mx-auto mb-24 mt-12 flex w-[96vw] flex-col content-center items-center 
   rounded-lg bg-[linear-gradient(180deg,_#FFF_0%,_#F4F4F5_100%)] px-2 dark:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.10)_100%)] md:mt-[90px]
   md:rounded-2xl
   md:px-0 lg:mt-[103px] 2xl:w-[94vw]"
      id="faqs"
    >
      <div className="mx-auto mb-10 flex max-w-[90%] flex-col items-center justify-center xl:max-w-[62%]">
        <Badge
          variant="outline"
          className="mb-3.5 w-max px-4 py-2 text-foreground dark:border-none dark:bg-zinc-800 dark:text-white"
        >
          FREQUENTLY ASKED QUESTIONS
        </Badge>
        <h1 className="mx-auto mb-5 text-center text-3xl font-extrabold text-foreground dark:text-white md:text-5xl">
          Frequently asked questions
        </h1>
        <p className="3xl:max-w-[56%] mx-auto mb-8 max-w-full text-center text-base font-normal leading-8 text-foreground dark:text-zinc-400 md:max-w-[80%] md:text-lg md:leading-8 2xl:max-w-[66%]">
          Looking for something else? Chat with us via{' '}
          <a className="underline" href="mailto:legalai.gt@gmail.com">
          legalai.gt@gmail.com
          </a>{' '}
          and we will try our best to help you with your questions!
        </p>
      </div>
      <div className="mx-auto mb-[60px] w-full max-w-full md:mb-[120px] md:max-w-[80%] lg:max-w-[860px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="dark:text-white">
            What makes Elenchus different from other legal research platforms?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Elenchus is the first AI-powered legal search engine focused exclusively on Latin America. 
            We centralize judicial, arbitral, and administrative decisions, combining deep legal expertise with cutting-edge AI tools to deliver precise, 
            data-driven insights—ensuring transparency, predictability, and efficiency in legal research.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="dark:text-white">
            ⁠What type of legal data does Elenchus provide?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Our platform offers access to curated case law, judicial rulings, 
            arbitral awards, and administrative decisions across Latin America.
            We digitize, translate, and enrich this data, enabling advanced search, 
            comparative analysis, and AI-driven insights tailored to legal professionals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="dark:text-white">
            How does AI enhance legal research on Elenchus?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Elenchus integrates multiple AI models to streamline legal research. 
            Our AI tools identify patterns, extract key insights, predict legal trends, 
            and assist in drafting preliminary arguments—saving time and improving 
            decision-making with unparalleled accuracy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="dark:text-white">
            Can I interact with different AI models on the platform?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Yes. Elenchus allows you to query and analyze legal data using integrated 
            AI models, including ChatGPT-4, Mistral, and DeepSeek. Our built-in calibration 
            ensures accuracy, eliminating AI-generated errors or hallucinated precedents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="dark:text-white">
            ⁠Who can benefit from using Elenchus?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Elenchus is designed for law firms, corporate legal teams, NGOs, international organizations, 
            and academic institutions handling Latin American legal matters. Whether for litigation, arbitration, 
            compliance, or policy research, our platform provides the data and insights needed to navigate 
            complex legal landscapes with confidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="dark:text-white">
            How does Elenchus ensure the accuracy of its data?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Elenchus employs rigorous data validation processes, including manual review, 
            AI-driven quality control, and compliance with international standards. 
            Our team ensures that all data is accurate, up-to-date, and meets the highest 
            legal standards, providing a reliable source for legal professionals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="dark:text-white">
            Is Elenchus suitable for non-lawyers or individuals without legal expertise?
            </AccordionTrigger>
            <AccordionContent className="dark:text-white">
            Yes! While Elenchus is designed primarily for legal professionals, its intuitive interface 
            and AI-powered tools make it accessible for researchers, journalists, business professionals, 
            and anyone needing reliable legal insights. Our platform simplifies complex legal texts, 
            provides summaries, and offers AI-driven guidance to help users navigate legal information with ease.            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <Accordion allowMultiple>
          <AccordionItem borderTop="0px solid">
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                  
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  
                  
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                  
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                 
                </p>
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  You can learn more on our{' '}
                  <a href="/pricing">
                    <span className="font-bold text-[#422afb]">
                      
                    </span>
                  </a>{' '}
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                  
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <p className="flex text-left">
                  How can I use Horizon UI Boilerplate?
                </p>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                 
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                 
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                  
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton
                py="25px"
                _hover={{ bg: 'none' }}
                fontSize="md"
                letterSpacing="0px"
                fontWeight={'700'}
                className="text-foreground"
                _active={{ boxShadow: 'none' }}
                _focus={{ boxShadow: 'none' }}
              >
                <span className="flex text-left">
                
                </span>
                <AccordionIcon ml="auto" />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-10">
                <p className="text-base font-normal text-foreground dark:text-zinc-400">
                 
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}
      </div>
    </div>
  );
}
