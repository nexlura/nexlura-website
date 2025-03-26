'use client'
import { motion } from 'framer-motion'

function Parts({
    src,
    top,
    offset,
    delay,
    divSize,
    imgSize,
}: {
    src: string
    top: number
    offset: number
    delay: number
    divSize: number
    imgSize: number
}) {
    return (
        <motion.div
            variants={{
                idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
                active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
            }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0 }}
            style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
            className={`absolute left-[calc(50%+var(--offset))] size-[${divSize}px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]`}
        >
            <img
                alt=""
                src={src}
                className={`absolute top-[4px] left-[7px] size-[${imgSize}px]`}
            />
        </motion.div>
    )
}

function Robot({
                   src,
                   top,
                   offset,
                   delay,
                   divSize,
                   imgSize,
               }: {
    src: string
    top: number
    offset: number
    delay: number
    divSize: number
    imgSize: number
}) {
    const transitionValues = {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0,
    };

    return (
      <motion.div
        transition={{
          y: transitionValues,
          width: `${divSize}px`,
        }}
        animate={{
          y: ['2rem', '5rem'],
          width: `${divSize}px`,
        }}
        style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
        className={`absolute left-[calc(50%+var(--offset))] size-[${divSize}px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]`}
      >
        <img
          alt=""
          src={src}
          className={`absolute top-[4px] left-[7px] size-[${imgSize}px]`}
        />
      </motion.div>
    )
}

const AIDevelopment = () => {
    return (
        <div className="h-80 bg-[url(/ai/background.png)] bg-no-repeat bg-cover bg-center">
            <Robot
                src="/ai/robot.png"
                top={70}
                offset={-120}
                delay={0.15}
                divSize={190}
                imgSize={95}
            />
        </div>
    )
}

export default AIDevelopment