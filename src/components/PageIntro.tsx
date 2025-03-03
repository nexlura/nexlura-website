import clsx from 'clsx'

import { FadeIn } from '@/components/FadeIn'
import { ContactContainer } from './ContactContainer'
import { Heading, Subheading } from './Text'

export function PageIntro({
    eyebrow,
    title,
    children,
    centered = false,
}: {
    eyebrow: string
    title: string
    children: React.ReactNode
    centered?: boolean
}) {
    return (
        <ContactContainer
            className={clsx('mt-16', centered && 'text-center')}
        >
            <FadeIn>
                <Subheading className='mb-3'>Contact Us</Subheading>
                <Heading as="h1">{title}</Heading>
                <div
                    className={clsx(
                        'mt-6 max-w-3xl text-xl text-neutral-600',
                        centered && 'mx-auto',
                    )}
                >
                    {children}
                </div>
            </FadeIn>
        </ContactContainer>
    )
}
