'use client';

import { useEffect, useState } from 'react';
import NavbarFixed from '@/components/navbar/NavbarFixed';
import { FooterWebsite } from '@/components/footer/FooterWebsite';
import '@/styles/globals.css';

export default function TermsAndConditions() {
    const [theme, setTheme] = useState('light');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
            setIsClient(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <div className="relative w-full flex-col overflow-hidden bg-white dark:bg-zinc-950 pt-[40px] md:pt-[140px]">
            {isClient && <NavbarFixed toggleTheme={toggleTheme} currentTheme={theme} />}

            <main className="flex-grow flex flex-col justify-center items-center text-center px-8 py-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                    Terms and Conditions
                </h1>
                <div className="max-w-3xl text-left text-lg text-gray-700 dark:text-gray-300 space-y-6 overflow-y-auto">
                    <p>
                        Welcome to <strong>Elenchus</strong> (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”)
                        govern your use of our legal research platform, services, and any related content (collectively, the
                        <strong>“Services”</strong>). By accessing or using our Services, you agree to these Terms. If you do not
                        agree, you must discontinue use immediately.
                    </p>
                    <p>
                        By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of
                        the terms, you may not access the website.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">2. Eligibility & User Obligations</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You must be at least <strong>18 years old</strong> and have the legal capacity to enter into binding agreements.</li>
                        <li>You agree to use the Services <strong>solely for lawful purposes</strong> and in compliance with all applicable laws.</li>
                        <li>You may not misuse, resell, or redistribute the Services without express authorization from Elenchus.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property Rights</h2>
                    <p>
                        All content, software, databases, and proprietary algorithms within the platform are{' '}
                        <strong>owned by or licensed to Elenchus</strong> and are protected by intellectual property laws.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You are granted a <strong>limited, non-exclusive, non-transferable license</strong> to use the Services strictly for research.</li>
                        <li>Any unauthorized use, reproduction, or redistribution is strictly prohibited.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">4. User Accounts & Subscription Services</h2>
                    <p>Subscription Services are available only to registered Users with an active account.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Users must provide <strong>accurate and complete information</strong> during registration.</li>
                        <li>Each account is <strong>strictly personal</strong> and must not be shared.</li>
                        <li>Users assume full responsibility for all activities under their account.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">5. AI-Generated Content Disclaimer</h2>
                    <p>
                        Elenchus integrates AI tools, including ChatGPT-4, Mistral, and DeepSeek, to enhance legal research. 
                        However, AI-generated insights <strong>do not constitute legal advice</strong>.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">6. User Content</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Users represent and warrant that they have the <strong>necessary rights</strong> to publish the content.</li>
                        <li>Users agree to <strong>indemnify Elenchus</strong> against any claims related to User Content.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">7. Impermissible Conduct</h2>
                    <p>Users may not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide false, misleading, or fraudulent information.</li>
                        <li>Scrape, copy, or redistribute platform data.</li>
                        <li>Deploy bots, crawlers, or automated software to interfere with the platform.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">8. Availability of the Services</h2>
                    <p>
                        Elenchus aims to maintain 24/7 availability, but Services are provided <strong>“as available”</strong>. 
                        Access may be suspended due to maintenance, system updates, or outages.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">9. Governing Law & Dispute Resolution</h2>
                    <p>These Terms shall be governed by and construed in accordance with <strong>Guatemalan substantive law</strong>.</p>
                    <p>Disputes shall be resolved by arbitration in <strong>Guatemala City, Guatemala</strong>.</p>
                    <h2 className="text-2xl font-semibold mt-8">10. Contact Information</h2>
                    <p>📍 Guatemala City, Guatemala</p>
                    <p>📧 [legalaigt@gmail.com]</p>
                    <p>📞 [+502 30514423]</p>
                    <p className="text-lg font-semibold mt-4">Last updated: 2025-02-26</p>
                </div>
            </main>

            <FooterWebsite />
        </div>
    );
}
