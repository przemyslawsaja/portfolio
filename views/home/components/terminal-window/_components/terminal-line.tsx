import { styled } from "@/theme";
import { TerminalHtmlTag } from "@/views/home/_components/terminal-window/_components/terminal-html-tag";
import { motion, useInView } from "framer-motion";
import { fadeIn, FadeInProps } from "@/constants/motion";
import { useRef } from "react";

const STerminalLine = styled(motion.div)`
  list-style: none;
  display: flex;
  gap: 1rem;
  width: 100%;
  margin: 0.5rem 0;
`

const STerminalLineContent = styled.div`
  padding-left: 2rem;
  color: ${ ({ theme }) => theme.colors.gray.light };
`

const SLabel = styled.span`
  color: #fff;
`

const SLineNumber = styled.div`
  text-align: center;
  color: ${ ({ theme }) => theme.colors.secondary.lightest };
  width: 3rem;
`

type Props = {
    index: number,
    label?: string,
    children?: JSX.Element,
} & FadeInProps
export const TerminalLine = ({ index, label, children, fadeInDelay }: Props) => {
    const lineRef = useRef(null);

    if (children) {
        return <STerminalLine { ...fadeIn(fadeInDelay) } ref={ lineRef }>
            <SLineNumber>{ index }</SLineNumber>
            { children }
        </STerminalLine>
    }

    return <STerminalLine { ...fadeIn( fadeInDelay) } ref={ lineRef }>
        <SLineNumber>{ index }</SLineNumber>
        <STerminalLineContent>
            <TerminalHtmlTag tag='li' attributeValue={ 'skill-item' } attribute={ 'class' }/>
            <SLabel> { label } </SLabel>
            <TerminalHtmlTag tag='li' close/>
        </STerminalLineContent>
    </STerminalLine>
}
