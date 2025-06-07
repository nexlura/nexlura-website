import type { Metadata } from 'next'

import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'
import { Heading, Subheading } from '@/components/Text'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import SoftwareDevelopment from "@/components/Software"
import AIDevelopment from "@/components/AI"
import BlockchainDevelopment from "@/components/Blockchain"
import QATesting from "@/components/QA"
import TechnicalSupport from "@/components/Support"

export const metadata: Metadata = {
  title: 'Custom Software Solutions | Nexlura',
  description:
    'We help you build scalable, innovative software solutions that drive growth and efficiency.',
  openGraph: {
    title: 'Custom Software Solutions | Nexlura',
    description: 'We help you build scalable, innovative software solutions that drive growth and efficiency.',
    type: 'website',
  },
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-4xl/[1.3] font-medium tracking-tight text-balance text-gray-950 sm:text-5xl/[1.2] md:text-6xl/[1.1]">
            Custom Software Solutions to Accelerate Your Growth
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We help you build scalable, innovative software solutions that drive growth and efficiency.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact" className='h-10'>Get started</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <Container>
      <Subheading>Services</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        We design, build, and optimize technology that scales.
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Build"
          title="Software Development"
          description="Comprehensive full-stack development services, including web, mobile, and cloud-based solutions, tailored to meet specific client needs."
          graphic={<SoftwareDevelopment />}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl hover:shadow-xl transition-shadow duration-300"
        />
        <BentoCard
          eyebrow="Data"
          title="AI & Machine Learning Solutions"
          description="Bespoke AI tools, data-driven insights, and machine learning models that drive business intelligence and operational efficiency."
          graphic={<AIDevelopment />}
          className="lg:col-span-3 lg:rounded-tr-4xl hover:shadow-xl transition-shadow duration-300"
        />
        <BentoCard
          eyebrow="Blockchain"
          title="Web3 & Blockchain"
          description="Harness blockchain infrastructure to deliver secure and scalable decentralized solutions."
          graphic={<BlockchainDevelopment />}
          className="lg:col-span-2 lg:rounded-bl-4xl hover:shadow-xl transition-shadow duration-300"
        />
        <BentoCard
          eyebrow="Testing"
          title="Quality Assurance (QA)"
          description="Ensuring flawless performance of systems through meticulous testing and quality standards."
          graphic={<QATesting />}
          className="lg:col-span-2 hover:shadow-xl transition-shadow duration-300"
        />
        <BentoCard
          eyebrow="Support"
          title="Technical Support"
          description="Reliable support and maintenance services to ensure optimal system performance and seamless user experiences."
          graphic={<TechnicalSupport />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </Container>
  )
}

function WhyChooseUs() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <Subheading>Why Choose Us</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Expert solutions backed by proven experience.
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-neutral-950 p-8 ring-1 ring-inset ring-neutral-800">
          <h3 className="text-lg font-semibold text-white">Expertise & Innovation</h3>
          <p className="mt-4 text-sm text-neutral-300">
            Our team brings deep technical expertise and stays at the forefront of technology trends to deliver innovative solutions.
          </p>
        </div>
        <div className="rounded-3xl bg-neutral-950 p-8 ring-1 ring-inset ring-neutral-800">
          <h3 className="text-lg font-semibold text-white">Tailored Solutions</h3>
          <p className="mt-4 text-sm text-neutral-300">
            We create custom solutions that perfectly align with your business needs and objectives.
          </p>
        </div>
        <div className="rounded-3xl bg-neutral-950 p-8 ring-1 ring-inset ring-neutral-800">
          <h3 className="text-lg font-semibold text-white">Reliable Support</h3>
          <p className="mt-4 text-sm text-neutral-300">
            Our dedicated support team ensures your systems run smoothly with 24/7 monitoring and maintenance.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <ServicesSection />
          <WhyChooseUs />
        </div>
      </main>
      <Footer />
    </div>
  )
}