import Link from 'next/link'
import clsx from 'clsx'
import { SocialIconFacebook, SocialIconLinkedIn, SocialIconX } from './Footer'

export const socialMediaProfiles = [
    { title: 'Facebook', href: "https://www.facebook.com/share/16GiVdnXPV/", icon: SocialIconFacebook },
    { title: 'Twitter', href: "https://x.com/nexlura?s=11&t=yVNK4m9yN7kSWJRV1ElKDA", icon: SocialIconX },
    { title: 'LinkedIn', href: "https://www.linkedin.com/company/nexlura-llc", icon: SocialIconLinkedIn },
]

export function SocialMedia({
    className,
    invert = false,
}: {
    className?: string
    invert?: boolean
}) {
    return (
        <ul
            role="list"
            className={clsx(
                'flex gap-x-10',
                invert ? 'text-white' : 'text-neutral-950',
                className,
            )}
        >
            {socialMediaProfiles.map((socialMediaProfile) => (
                <li key={socialMediaProfile.title}>
                    <Link
                        href={socialMediaProfile.href}
                        aria-label={socialMediaProfile.title}
                        className={clsx(
                            'transition',
                            invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
                        )}
                    >
                        <socialMediaProfile.icon className="h-5 w-5 fill-current" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}
