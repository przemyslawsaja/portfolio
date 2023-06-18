import { styled } from "@/theme";
import { motion } from "framer-motion";
import { fadeIn, FadeInProps } from "@/constants/motion";
import { defaultTheme as theme } from "@/theme/default-theme";
import Icon from '@mdi/react'
import { CORE_SKILLS } from "../../../../mocks/skills";
import { TerminalLine } from "@/views/home/components/terminal-window/_components/terminal-line";
import { TerminalHtmlTag } from "@/views/home/components/terminal-window/_components/terminal-html-tag";
import {
    TECHNOLOGIES_INDEX_EQUALIZER,
    TERMINAL_FADE_DELAY, TERMINAL_LINE_FADE_SPEED
} from "@/views/home/components/terminal-window/terminal-window.constants";
import { hexToRGBA } from "@/utils/hexToRGBA";
import { useTranslation } from "next-i18next";
import { ProgressBar } from "@/components/progress-bar";
import { useToggle } from "@/hooks/use-toggle";
import { useEffect, useState } from "react";
import { WindowTab } from "@/components/window-tab";

const SWindowTabContainer = styled.div`
  position: absolute;
  z-index: ${({theme}) => theme.zIndex.high };
`

export const TerminalWindow = ({ fadeInDelay = 0 }: FadeInProps) => {
    const { isToggled, toggle } = useToggle();
    const { t } = useTranslation('welcome')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const calculateLineFadeDelay = (index: number) => {
        return TERMINAL_FADE_DELAY + index / TERMINAL_LINE_FADE_SPEED
    };

    const renderTerminalContent = (): JSX.Element => {
        if (isToggled) {
            return <>
                {
                    CORE_SKILLS.map(({ label, percentage }, index) => {
                        return <ProgressBar { ...{ label, percentage } } key={ index }/>
                    })
                }
            </>
        }

        return <>
            <TerminalLine index={ 1 } fadeInDelay={ isMounted ? 0 : TERMINAL_FADE_DELAY }>
                <TerminalHtmlTag tag='ul' attribute={ 'class' } attributeValue={ 'skills-list' }/>
            </TerminalLine>
            {
                CORE_SKILLS.map((skill, index) => {
                    return <TerminalLine
                        label={ skill.label }
                        key={ index }
                        index={ index + TECHNOLOGIES_INDEX_EQUALIZER }
                        fadeInDelay={ isMounted ? 0 : calculateLineFadeDelay(index) }/>
                })
            }
            <TerminalLine index={ CORE_SKILLS.length + TECHNOLOGIES_INDEX_EQUALIZER }
                          fadeInDelay={ isMounted ? 0 : TERMINAL_FADE_DELAY + 1 }>
                <TerminalHtmlTag tag='ul' attribute={ 'class' } close/>
            </TerminalLine>
        </>
    }

    return <SWindowTabContainer>
            <WindowTab title={t('terminal-title')} toggle={toggle} isToggled={isToggled} fadeInDelay={fadeInDelay}>
                { renderTerminalContent() }
        </WindowTab>
    </SWindowTabContainer>
}
