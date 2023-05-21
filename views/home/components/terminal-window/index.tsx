import { styled } from "@/theme";
import { motion } from "framer-motion";
import { fadeIn, FadeInProps } from "@/constants/motion";
import { defaultTheme as theme } from "@/theme/default-theme";
import Icon from '@mdi/react'
import { CORE_SKILLS } from "../../../../mocks/skills";
import { TerminalLine } from "@/views/home/_components/terminal-window/_components/terminal-line";
import { TerminalHtmlTag } from "@/views/home/_components/terminal-window/_components/terminal-html-tag";
import {
    TECHNOLOGIES_INDEX_EQUALIZER,
    TERMINAL_FADE_DELAY, TERMINAL_LINE_FADE_SPEED
} from "@/views/home/_components/terminal-window/terminal-window.constants";
import { mdiPlay, mdiPause } from '@mdi/js';
import { hexToRGBA } from "@/utils/hexToRGBA";
import { useTranslation } from "next-i18next";
import { ProgressBar } from "@/components/progress-bar";
import { useToggle } from "@/hooks/use-toggle";
import { useEffect, useState } from "react";

const STerminalContainer = styled(motion.div)`
  width: 50rem;
  padding-bottom: 0rem;
  backdrop-filter: ${ ({ theme }) => theme.blur.glass };
  border-radius: ${ ({ theme }) => theme.border.radius.rounded };
  background: ${ ({ theme }) => hexToRGBA(theme.colors.gray.light, 0.05) };
  border: ${ ({ theme }) => `1px solid ${ hexToRGBA(theme.colors.gray.light, 0.1) }` };
  z-index: ${({theme}) => theme.zIndex.high };
  position: absolute;
`

const STerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: ${ ({ theme }) => `1px solid ${ hexToRGBA(theme.colors.gray.light, 0.1) }` };
`

const SControl = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${ ({ color }) => color };
  border-radius: ${ ({ theme }) => theme.border.radius.full };
`
const SControlsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const STitle = styled.span`
  color: ${ ({ theme }) => theme.colors.gray.darker };
  font-size: ${ ({ theme }) => theme.text.size.small200 };
`

const STerminalContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

const SRunBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: ${ ({ theme }) => `1px solid ${ hexToRGBA(theme.colors.gray.light, 0.1) }` };
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${ ({ theme }) => hexToRGBA(theme.colors.secondary.darker, 0.5) };
    border: ${ ({ theme }) => `1px solid ${ theme.colors.secondary.light }` };
  }
`

export const TerminalWindow = ({ fadeInDelay = 0 }: FadeInProps) => {
    const { isToggled, toggle } = useToggle();
    const { t } = useTranslation('welcome')
    const { error, warning, success } = theme.colors.action;
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

    return <STerminalContainer { ...fadeIn(fadeInDelay) }>
        <STerminalHeader>
            <SControlsContainer>
                <SControl color={ error }/>
                <SControl color={ warning }/>
                <SControl color={ success }/>
            </SControlsContainer>
            <STitle>{ t('terminal-title') }</STitle>
            <SRunBtn onClick={ toggle }>
                <span>{ isToggled ? t('terminal-stop') : t('terminal-run') }</span>
                <Icon path={ isToggled ? mdiPause : mdiPlay } size={ 1.2 } color={ theme.colors.gray.darkest }/>
            </SRunBtn>
        </STerminalHeader>
        <STerminalContent>
            { renderTerminalContent() }
        </STerminalContent>
    </STerminalContainer>
}
