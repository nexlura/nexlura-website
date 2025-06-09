import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'
import { Heading, Subheading } from '@/components/text'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Mission from "@/components/Mission"
import { InnovationBackground } from '@/components/InnovationBackground'

export const metadata: Metadata = {
  title: 'About Our Company | Nexlura',
  description:
    'Learn about our mission, values, and commitment to helping businesses achieve more through innovative technology solutions.',
  openGraph: {
    title: 'About Our Company | Nexlura',
    description: 'Learn about our mission, values, and commitment to helping businesses achieve more through innovative technology solutions.',
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
            Building the Future of Technology
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We're a team of innovators, problem-solvers, and technology enthusiasts dedicated to transforming businesses through software.
          </p>
        </div>
      </Container>
    </div>
  )
}

function MissionSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Subheading>Our Mission</Subheading>
          <Heading as="h2" className="mt-2">
            Helping businesses do more
          </Heading>
          <p className="mt-6 text-xl text-gray-600">
            We're committed to empowering businesses with innovative technology solutions that drive growth, efficiency, and success. Our mission is to transform challenges into opportunities through cutting-edge software development.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="text-base font-semibold text-gray-600">Projects Delivered</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">5+</div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="text-base font-semibold text-gray-600">Client Satisfaction</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">98%</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Mission />
        </div>
      </div>
    </Container>
  )
}

function Values() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <Subheading>Our Values</Subheading>
      <Heading as="h2" className="mt-2">
        Principles that guide us
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-lg font-semibold text-gray-900">Innovation First</h3>
          <p className="mt-4 text-gray-600">
            We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-lg font-semibold text-gray-900">Client Success</h3>
          <p className="mt-4 text-gray-600">
            Your success is our success. We're committed to delivering solutions that drive real business value.
          </p>
        </div>
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="text-lg font-semibold text-gray-900">Quality Excellence</h3>
          <p className="mt-4 text-gray-600">
            We maintain the highest standards in everything we do, from code quality to client communication.
          </p>
        </div>
      </div>
    </Container>
  )
}

function TeamSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-16">
        <div>
          <Subheading>Our Story</Subheading>
          <Heading as="h2" className="mt-2">
            Founded on Innovation & Expertise
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="relative h-[32rem] transform overflow-hidden rounded-3xl">
            <InnovationBackground />
            <div className="relative z-10">
              <Image
                alt="Nexlura Founders"
                src="/team/founders.png"
                width={1000}
                height={1000}
                className="h-[32rem] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-lg font-medium">Afiz & Muhammad</p>
                <p className="text-sm text-white/75">Co-Founders of Nexlura</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-gray-600">
                During their tenure at a prominent consulting firm, where they delivered solutions for government institutions and NGOs, Maej and Afiz identified a critical gap in the market: businesses were consistently struggling to find the technical expertise needed to transform their innovative ideas into reality.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                This observation sparked a vision: to create a company that would bridge this gap by combining deep technical expertise with an unwavering commitment to client success. This vision materialized into Nexlura, a company dedicated to delivering scalable and robust software solutions that drive real business value.
              </p>
            </div>

            <div className="h-px bg-neutral-200" />

            <div>
              <p className="text-lg leading-8 text-gray-600">
                Today, Nexlura stands at the forefront of technological innovation, with a clear mission: to empower businesses through the strategic integration of AI, data, and software solutions. We're building an ecosystem where cutting-edge technology meets practical business applications, offering seamless integration and expert support to help organizations build scalable and efficient digital products.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/nexlura-llc"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <span>Follow on LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/nexlura"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <span>Follow on Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-lg text-gray-600">
            Together with our growing team of engineers, designers, and technology experts, we continue to push the boundaries of what's possible in software development and AI integration.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <MissionSection />
          <Values />
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
