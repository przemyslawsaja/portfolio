export enum TextAnimationType {
    LETTERS = 'letter',
    WORDS = 'words',
}

export const TextTransition = {
    type: "spring",
    damping: 12,
    stiffness: 100,
}

export const TEXT_ANIMATION_TYPE_MAP = {
    [TextAnimationType.LETTERS]: {
        staggerChildren: 0.03,
        delayChildren: 0.01,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
        },
        style: {}
    },
    [TextAnimationType.WORDS]: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: 20,
        },
        style: {
            marginRight: "5px"
        }
    }
}

export const getContainerVariants = (animationType: TextAnimationType, delay: number) => ({
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: {
            staggerChildren: TEXT_ANIMATION_TYPE_MAP[animationType].staggerChildren,
            delayChildren: delay ?? TEXT_ANIMATION_TYPE_MAP[animationType].delayChildren * i
        },
    }),
})

export const getChildVariants = (animationType: TextAnimationType) => ({
    visible: {
        ...TEXT_ANIMATION_TYPE_MAP[animationType].visible,
        transition: TextTransition,
    },
    hidden: {
        ...TEXT_ANIMATION_TYPE_MAP[animationType].hidden,
        transition: TextTransition,
    },
})
