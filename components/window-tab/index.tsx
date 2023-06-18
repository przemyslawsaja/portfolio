import { styled } from "@/theme";
import { motion } from "framer-motion";
import { hexToRGBA } from "@/utils/hexToRGBA";
import Icon from "@mdi/react";
import { mdiPause, mdiPlay } from "@mdi/js";
import { defaultTheme as theme } from "@/theme/default-theme";
import { useTranslation } from "next-i18next";
import { fadeIn } from "@/constants/motion";

const STerminalContainer = styled(motion.div)`
  width: 50rem;
  padding-bottom: 0rem;
  backdrop-filter: ${ ({ theme }) => theme.blur.glass };
  border-radius: ${ ({ theme }) => theme.border.radius.rounded };
  background: ${ ({ theme }) => hexToRGBA(theme.colors.gray.light, 0.05) };
  border: ${ ({ theme }) => `1px solid ${ hexToRGBA(theme.colors.gray.light, 0.1) }` };
  z-index: ${({theme}) => theme.zIndex.high };
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

type Props =  {
    children: JSX.Element,
    title: string
    isToggled?: boolean,
    fadeInDelay?: number,
    toggle?(): void,
}
export const WindowTab = ({children, title, isToggled, toggle, fadeInDelay} : Props) => {
    const { t } = useTranslation();
    const { error, warning, success } = theme.colors.action;

    return <STerminalContainer { ...fadeIn(fadeInDelay) }>
        <STerminalHeader>
            <SControlsContainer>
                <SControl color={ error }/>
                <SControl color={ warning }/>
                <SControl color={ success }/>
            </SControlsContainer>
            <STitle>{ title }</STitle>
            {toggle && <SRunBtn onClick={ toggle }>
                <span>{ isToggled ? t('terminal-stop') : t('terminal-run') }</span>
                <Icon path={ isToggled ? mdiPause : mdiPlay } size={ 1.2 } color={ theme.colors.gray.darkest }/>
            </SRunBtn>}
        </STerminalHeader>
        <STerminalContent>
            {children}
        </STerminalContent>
    </STerminalContainer>
}
