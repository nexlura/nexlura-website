import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactContainer } from '@/components/ContactContainer'
import { Footer } from '@/components/Footer'
import { GradientBackground } from '@/components/Gradient'
import { Container } from '@/components/Container'
import { Navbar } from '@/components/Navbar'
import { Lead } from '@/components/CustomText'
import ContactForm from '@/components/ContactForm'

function ContactDetails() {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Office Address
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                Get in touch with us—visit our office, drop an email, give us a call, or connect with us on social media.
            </p>
            <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Contact Details
                </h2>
                <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">

                    <div >
                        <dt className="font-semibold text-neutral-950">Phone</dt>
                        <dd>
                            <Link
                                href={`tel:+232 79 712365`}
                                className="text-neutral-600 hover:text-neutral-950"
                            >
                                +232 79 712365
                            </Link>
                        </dd>
                        <dd>
                            <Link
                                href={`tel:+232 30 847661`}
                                className="text-neutral-600 hover:text-neutral-950"
                            >
                                +232 30 847661
                            </Link>
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-neutral-950">Email</dt>
                        <dd>
                            <Link
                                href={`mailto:nexlura@gmail.com`}
                                className="text-neutral-600 hover:text-neutral-950"
                            >
                                nexlura@gmail.com
                            </Link>
                        </dd>
                    </div>
                </dl>
            </Border>
            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Follow us
                </h2>
                <SocialMedia className="mt-6" />
            </Border>
        </FadeIn>
    )
}

export const metadata: Metadata = {
    title: 'Contact Nexlura | Get Custom Software Development Quote | Freetown, Sierra Leone',
    description: 'Contact Nexlura for custom software development, AI solutions, blockchain development, QA testing, and technical support. Based in Freetown, Sierra Leone, serving clients worldwide. Get a free consultation today.',
    keywords: [
        'contact nexlura',
        'software development quote',
        'custom software consultation',
        'freetown software company contact',
        'sierra leone software developers',
        'software development inquiry',
        'AI development services contact',
        'blockchain development consultation',
        'QA testing services contact',
        'technical support contact',
        'offshore software development contact',
        'software outsourcing inquiry',
    ],
    openGraph: {
        title: 'Contact Nexlura | Get Custom Software Development Quote',
        description: 'Contact Nexlura for custom software development, AI solutions, blockchain development, and technical support. Serving clients worldwide from Freetown, Sierra Leone.',
        type: 'website',
        url: '/contact',
        images: [
            {
                url: '/logo-files/logo-icon.png',
                width: 1200,
                height: 630,
                alt: 'Contact Nexlura - Software Development Company',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Nexlura | Software Development Company',
        description: 'Get in touch for custom software development, AI, blockchain, and enterprise solutions.',
    },
    alternates: {
        canonical: '/contact',
    },
}

export default function Contact() {
    return (
        <main className='overflow-hidden'>
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <PageIntro eyebrow="Contact us" title="Let’s work together">
                <Lead className="mt-6 max-w-3xl">
                    We can’t wait to hear from you.
                </Lead>
            </PageIntro>
            <ContactContainer className="mt-24 sm:mt-32 lg:mt-40 mb-32">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </ContactContainer>
            <Footer />
        </main>
    )
}
