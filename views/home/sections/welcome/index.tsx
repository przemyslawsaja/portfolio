import Image from "next/image";
import { useTranslation } from "next-i18next";
import { styled } from "@/theme";
import { fadeIn } from "@/constants/motion";
import { TerminalWindow } from "@/views/home/components/terminal-window";
import { useParallax } from "react-scroll-parallax";
import BgMesh from "@/assets/images/bg-mesh.svg";
import { motion, useScroll } from "framer-motion"
import {useRef, useState} from "react";
import {useEventListener} from "usehooks-ts";
import {AnimatedText} from "@/components/animated-text";

const SImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.lowest };
`

const SPinkLight = styled(motion.div)<{ $offsetY: number, $offsetX: number}>`
  position: absolute;
  width: 120rem;
  height: 120rem;
  background: radial-gradient(circle, rgba(255, 55, 234, 0.21) 0%, rgba(255, 255, 255, 0) 48%);
  right: ${({ $offsetX }) => `-${$offsetX/3 - 200}px` };
  top: ${({ $offsetY }) => `${$offsetY/5 - 200}px` };
`

const SDarkBlueLight = styled(motion.div)<{ $offsetY: number, $offsetX: number}>`
  position: absolute;
  width: 100rem;
  height: 100rem;
  background: radial-gradient(circle, rgba(11, 79, 255, 0.2) 0%, rgba(255, 255, 255, 0) 53%);
  right: ${({ $offsetX }) => `${$offsetX/5 - 300}px` };
  top: ${({ $offsetY }) => `-${$offsetY/5 + 50}px` };
`

const SContent = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`

const SIntroduction = styled(motion.span)`
  color: ${ ({ theme }) => theme.colors.primary.main };
  font-size: ${ ({ theme }) => theme.text.size.medium300 };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.widest };
  padding-left: 0.5rem;
`

const SAuthor = styled(motion.span)`
  color: white;
  font-size: ${ ({ theme }) => theme.text.size.large500 };
  font-weight: bold;
`

const STitle = styled(motion.span)`
  color: ${ ({ theme }) => theme.colors.gray.light };
  font-size: ${ ({ theme }) => theme.text.size.large400 };
  font-weight: bold;
`

const SDescription = styled(motion.div)`
  color: ${ ({ theme }) => theme.colors.gray.darkest };
  font-size: ${ ({ theme }) => theme.text.size.medium400 };
  max-width: 45rem;
  padding-top: 1rem;
  line-height: ${ ({ theme }) => theme.text.lineHeight.snug };
`

const SContainer = styled.div`
  display: flex;
  gap: 10rem;
`

const STerminalContainer = styled.div`
  margin-top: 2rem;
`

const SWelcomeContainer = styled.section`
  padding: 20rem 22rem 5rem;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Welcome = () => {
    const { t } = useTranslation('welcome')
    const [positionY, setPositionY] = useState(0);
    const [positionX, setPositionX] = useState(0);

    useEventListener('mousemove', e => {
        setPositionY(e.screenY)
        setPositionX(e.screenX)
    })

    return <SWelcomeContainer>
        <SContent>
            <SIntroduction { ...fadeIn(0.5) }>
                { t('introduction') }
            </SIntroduction>
            <SAuthor { ...fadeIn(1) }>
                { t('author') }
            </SAuthor>
            <STitle { ...fadeIn(1.8) }>
                { t('title') }
            </STitle>
            <SContainer>
                <SDescription { ...fadeIn(2.5) }>
                    { t('description') }
                </SDescription>
                <STerminalContainer>
                    <TerminalWindow fadeInDelay={ 3 }/>
                </STerminalContainer>
            </SContainer>
        </SContent>
        <SImage src={ BgMesh } alt="" layout="fill" objectFit="cover"/>
        <SDarkBlueLight $offsetY={positionY} $offsetX={positionX} { ...fadeIn(1.5) }/>
        <SPinkLight  $offsetY={positionY} $offsetX={positionX} { ...fadeIn(1.5) } />
    </SWelcomeContainer>
}
