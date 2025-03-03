import type { Metadata } from 'next'

import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'
import { Keyboard } from '@/components/Keyboard'
import { LogoCluster } from '@/components/LogoCluster'
import { Map } from '@/components/Map'
import { Heading, Subheading } from '@/components/Text'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  description:
    'We help you build scalable, innovative software solutions that drive growth and efficiency.',
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

const ServicesSection = () => {
  return (
    <Container>
      <Subheading>Services</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl ">
        We design, build, and optmize technology that scales.
      </Heading>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Build"
          title="Software Developement"
          description="Comprehensive full-stack development services, including web, mobile, and cloud-based solutions, tailored to meet specific client needs.
          "
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Data"
          title="AI & Machine Learning Solutions"
          description="Bespoke AI tools, data-driven insights, and machine learning models that drive business intelligence and operational efficiency."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Blockchain"
          title="Web3 & Blockchain"
          description="Harness blockchain infrastructure to deliver secure and scalable decentralized solutions."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Testing"
          title="Quality Assurance (QA)"
          description="Ensuring flawless performance of systems through meticulous testing and quality standards."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Support"
          title="Technical Support"
          description="Reliable support and maintenance services to ensure optimal system performance and seamless user experiences."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home