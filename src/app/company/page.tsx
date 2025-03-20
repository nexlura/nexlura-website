import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { GradientBackground } from '@/components/Gradient'
import { Navbar } from '@/components/Navbar'
import { Heading, Lead, Subheading } from '@/components/Text'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'We’re on a mission to transform businesses by using technology to drive efficiency, innovation, and sustainable growth.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Helping businesses do more.</Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re on a mission to transform businesses by using technology to drive efficiency, innovation, and sustainable growth.
      </Lead>
      <section className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-lg:order-first max-lg:max-w-lg">
              <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                      alt=""
                      src="/company/mission.jpg"
                      className="block size-full object-cover"
                  />
              </div>
          </div>
        <div className="max-w-2xl text-justify">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-lg/6 text-gray-600">
            At NexLura, we are committed to transforming businesses by delivering high-quality,
            customized software solutions and advanced AI tools. Our mission is to empower
            organizations with cutting-edge technology that enhances efficiency,fosters innovation,
            and drives sustainable growth. By leveraging our deep expertise in software development
            and AI integration,we help businesses modernize their operations and stay ahead in
            an ever-evolving digital landscape.
          </p>
          <p className="mt-8 text-lg/6 text-gray-600">
            As a specialized software consulting company, NexLura was founded by experienced
            software developers with a proven track record of providing technical solutions
            and expert guidance. We are dedicated to offering tailored solutions that address
            the unique challenges of our clients. With a strong foundation in consulting and
            engineering support, we aim to bridge the gap between business needs and
            technological advancement, ensuring long-term success for the companies we serve.
          </p>
        </div>
      </section>
    </Container>
  )
}

function Team() {
  return (
    <Container className="my-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        NexLura is founded by experienced software developers delivering scalable
        and user-friendly solutions backed by hands-on expertise.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-2xl text-justify">
          <p className="text-lg/6 text-gray-600">
            Some time ago, while working at a consulting firm, delivering solutions
            for top clients ranging from government institutions to NGOs.
            Maej and Afiz saw an opportunity - businesses are struggling with
            the lack of technical expertise to bring their ideas to life.
            They had an idea: what if they built a company that combined deep technical
            knowledge with a client-first approach to address this challenge?
            That idea became the foundation of NexLura, a company dedicated to delivering
            scalable and robust software solutions.
          </p>
          <p className="mt-8 text-lg/6 text-gray-600">
            NexLura is on a mission to help businesses harness AI,
            data and software solutions, to build scalable and efficient digital products.
            The company aims to become a trusted partner for AI-driven automation
            and intelligent software solutions, offering seamless integration and
            expert support in a single ecosystem.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>

    </Container>
  )
}


export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Footer />
    </main>
  )
}
