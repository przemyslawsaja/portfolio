export type FadeInProps = {
    fadeInDelay?: number
}

export const fadeIn = (delay?: number) => (
    {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: delay ?? 0, duration: 0.5 }
    }
)
