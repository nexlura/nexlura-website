import { clsx } from 'clsx'

type HeadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark?: boolean
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export function Heading({
  as: Component = 'h1',
  dark = false,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={clsx(
        className,
        'font-display text-4xl/[1.3] font-medium tracking-tight text-balance sm:text-5xl/[1.2]',
        dark ? 'text-white' : 'text-gray-950',
      )}
      {...props}
    />
  )
}

type SubheadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark?: boolean
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export function Subheading({
  as: Component = 'h2',
  dark = false,
  className,
  ...props
}: SubheadingProps) {
  return (
    <Component
      className={clsx(
        className,
        'font-display text-sm font-medium tracking-wider',
        dark ? 'text-white' : 'text-gray-950',
      )}
      {...props}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(className, 'text-2xl font-medium text-gray-500')}
      {...props}
    />
  )
}
