'use client';

import { useEffect, useState } from 'react';
import NavbarFixed from '@/components/navbar/NavbarFixed';
import { FooterWebsite } from '@/components/footer/FooterWebsite';
import '@/styles/globals.css';

export default function PrivacyPolicy() {
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
                    Elenchus Privacy Policy
                </h1>
                <div className="max-w-3xl text-left text-lg text-gray-700 dark:text-gray-300 space-y-6 overflow-y-auto">
                    <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
                    <p>
                        At <strong>Elenchus</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our platform. By accessing Elenchus, you agree to the terms outlined below.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">2. What Data We Collect</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Information</strong> (name, email, professional details).</li>
                        <li><strong>Usage Data</strong> (interactions with our platform, search activity, and preferences).</li>
                        <li><strong>Billing Information</strong> (for paid subscriptions, handled by third-party payment processors).</li>
                    </ul>
                    <p>We do <strong>not</strong> collect sensitive personal data.</p>
                    <h2 className="text-2xl font-semibold mt-8">3. How We Use Your Data</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide access to our legal research platform.</li>
                        <li>Improve search accuracy and platform functionality.</li>
                        <li>Communicate with you regarding your account or platform updates.</li>
                        <li>Ensure security and prevent fraud.</li>
                    </ul>
                    <p>We do <strong>not</strong> sell your data to third parties.</p>
                    <h2 className="text-2xl font-semibold mt-8">4. Where Your Data is Stored</h2>
                    <p>
                        Elenchus uses <strong>Amazon Web Services (AWS)</strong> for cloud storage. As a result, your data may be processed in multiple locations. While we do not control where AWS hosts our servers, we apply industry-standard security measures to protect your information.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">5. Who Has Access to Your Data?</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Elenchus team members</strong>, for platform management and customer support.</li>
                        <li><strong>Trusted third-party service providers</strong>, such as payment processors and cloud hosting services.</li>
                        <li><strong>Legal authorities</strong>, if required by law.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8">6. Data Retention</h2>
                    <p>
                        We retain your data for as long as necessary to provide our services. If you close your account, we will delete or anonymize your data unless required by law to retain it.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">7. Cookies & Tracking Technologies</h2>
                    <p>
                        Elenchus uses cookies to improve user experience and analyze platform usage. You can manage cookie preferences through your browser settings.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">8. Your Rights Over Your Personal Data</h2>
                    <p>
                        In accordance with the <strong>General Data Protection Regulation (GDPR)</strong> and other applicable laws, you have the following rights over your personal data:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Right of access</strong> – You can request a copy of the personal data we hold about you.</li>
                        <li><strong>Right to rectification</strong> – You can ask us to correct inaccurate or incomplete data.</li>
                        <li><strong>Right to erasure ("right to be forgotten")</strong> – You can request the deletion of your personal data, subject to legal obligations.</li>
                        <li><strong>Right to restriction of processing</strong> – You can ask us to limit how we use your data in certain circumstances.</li>
                        <li><strong>Right to withdraw consent</strong> – You can withdraw consent for data processing activities that rely on it.</li>
                        <li><strong>Right to data portability</strong> – You can request to receive your data in a structured, machine-readable format.</li>
                        <li><strong>Right to object</strong> – You can object to the processing of your data under certain conditions.</li>
                        <li><strong>Right to lodge a complaint</strong> – You can refer a complaint to a data protection authority if you believe your rights have been violated.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at <strong>[your email]</strong>. We will respond within a reasonable time frame.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">9. Pseudonymization of Judicial, Arbitral, or Administrative Decisions</h2>
                    <p>
                        If your name or personal information appears in a <strong>judicial, arbitral, or administrative decision</strong> available on Elenchus and you wish to request pseudonymization, you may submit a request via email to <strong>[your email]</strong>.
                    </p>
                    <p>
                        Your request must include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>A valid document proving your identity.</li>
                        <li>If submitting on behalf of another person, proof of authorization and their identity.</li>
                    </ul>
                    <p>
                        We will process your request <strong>within a reasonable time</strong> and will strive to balance the <strong>public nature of legal decisions</strong> with <strong>the rights and freedoms of individuals</strong>. If the decision originates from a <strong>public institution</strong>, we may refer you to the relevant institution for further action.
                    </p>
                    <p>
                        Note: <strong>This pseudonymization policy does not apply to legal professionals (e.g., judges, arbitrators, court officials, lawyers, experts), whose names remain publicly accessible.</strong>
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any significant changes will be communicated via email or platform notifications.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8">11. Contact Us</h2>
                    <p>
                        If you have any questions or requests regarding your privacy, contact us at:
                    </p>
                    <p>📧 <strong>legalaigt@gmail.com</strong></p>
                    <p>📍 <strong>Guatemala City, Guatemala</strong></p>
                    <p className="text-lg font-semibold mt-4">Last updated: 2025-02-26</p>
                </div>
            </main>

            <FooterWebsite />
        </div>
    );
} 