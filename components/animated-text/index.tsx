import React from "react";
import { motion } from "framer-motion";
import {
    getChildVariants,
    getContainerVariants,
    TEXT_ANIMATION_TYPE_MAP,
    TextAnimationType,
} from "./animated-text.contants";

type Props = {
    text: string,
    animationType?: TextAnimationType
    delay?: number
}

export const AnimatedText = ({ text, delay = 0.01, animationType = TextAnimationType.LETTERS }: Props) => {
    const activeAnimation = TEXT_ANIMATION_TYPE_MAP[animationType];
    const characters = animationType === TextAnimationType.LETTERS ? Array.from(text) : text.split(" ");

    const formattedCharacters = (character: string) => {
        if (animationType === TextAnimationType.LETTERS) {
            return character === " " ? "\u00A0" : character
        }

        return character
    }

    return (
        <motion.div
            style={ { overflow: "hidden", display: "flex" } }
            variants={ getContainerVariants(animationType, delay) }
            initial="hidden"
            animate="visible"
        >
            { characters.map((character, index) => (
                <motion.span variants={ getChildVariants(animationType) } key={ index } style={ activeAnimation.style }>
                    { formattedCharacters(character) }
                </motion.span>
            )) }
        </motion.div>
    );
};
