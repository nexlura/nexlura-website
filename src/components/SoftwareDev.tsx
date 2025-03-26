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
            transition={{ duration: 0.25, delay, ease: 'easeOut' }}
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

const SoftwareDevelopment = () => {
    return (
        <div className="h-80 bg-[url(/software-dev/background.png)] bg-no-repeat bg-cover bg-center">
            <Parts
                src="/software-dev/top-objects.png"
                top={-5}
                offset={-170}
                delay={0.15}
                divSize={190}
                imgSize={95} />
            <Parts
                src="/software-dev/left-objects.png"
                top={65}
                offset={-210}
                delay={0.30}
                divSize={150}
                imgSize={195} />
            <Parts
                src="/software-dev/bottom-objects.png"
                top={190}
                offset={-80}
                delay={0.40}
                divSize={190}
                imgSize={180} />
            <Parts
                src="/software-dev/right-objects.png"
                top={-12}
                offset={90}
                delay={0.50}
                divSize={150}
                imgSize={155} />
        </div>
    )
}

export default SoftwareDevelopment