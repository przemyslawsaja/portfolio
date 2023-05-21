import React from "react";
import { motion } from "framer-motion";

export enum TextAnimationType {
    LETTERS = 'letter',
    WORDS = 'words',
}

type Props = {
    text: string,
    animationType?: TextAnimationType
    delay?: number
}

const TEXT_ANIMATION_TYPE_MAP = {
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

const transition = {
    type: "spring",
    damping: 12,
    stiffness: 100,
}

export const AnimatedTextCharacter = ({ text, delay = 0.01, animationType = TextAnimationType.LETTERS }: Props) => {
    const activeAnimationMap = TEXT_ANIMATION_TYPE_MAP[animationType];
    const characters = animationType === TextAnimationType.LETTERS ? Array.from(text) : text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: activeAnimationMap.staggerChildren,
                delayChildren: delay ?? activeAnimationMap.delayChildren * i
            },
        }),
    };


    const child = {
        visible: {
            ...activeAnimationMap.visible,
            transition,
        },
        hidden: {
            ...activeAnimationMap.hidden,
            transition,
        },
    };

    const formattedCharacters = (character: string) => {
        if (animationType === TextAnimationType.LETTERS) {
            return character === " " ? "\u00A0" : character
        }

        return character
    }
    return (
        <motion.div
            style={ { overflow: "hidden", display: "flex" } }
            variants={ container }
            initial="hidden"
            animate="visible"
        >
            { characters.map((character, index) => (
                <motion.span variants={ child } key={ index } style={ activeAnimationMap.style }>
                    { formattedCharacters(character) }
                </motion.span>
            )) }
        </motion.div>
    );
};
