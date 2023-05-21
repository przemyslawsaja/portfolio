import Image from "next/image";
import WelcomeBackgroundImage from '@/assets/images/welcome-background.svg'
import { useTranslation } from "next-i18next";
import { styled } from "@/theme";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import { TerminalWindow } from "@/views/home/_components/terminal-window";

const SImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.lowest };
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
`

export const Welcome = () => {
    const { t } = useTranslation('welcome')
    return <SWelcomeContainer>
        <SContent>
            <SIntroduction {...fadeIn(0.5)}>
                {t('introduction')}
            </SIntroduction>
            <SAuthor {...fadeIn(1)}>
                { t('author') }
            </SAuthor>
            <STitle {...fadeIn(1.8)}>
                {t('title') }
            </STitle>
            <SContainer>
                <SDescription {...fadeIn(2.5)}>
                    { t('description') }
                </SDescription>
                <STerminalContainer>
                    <TerminalWindow fadeInDelay={3} />
                </STerminalContainer>
            </SContainer>
        </SContent>
        <SImage src={ WelcomeBackgroundImage } alt="" layout="fill" objectFit="cover"/>
    </SWelcomeContainer>
}
