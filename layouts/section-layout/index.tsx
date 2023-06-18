import { styled } from "@/theme/index"
import { motion}  from "framer-motion";

const SSection = styled.section<{ width?: string }>`
  margin: 20rem 22rem 5rem;
  position: relative;
  height: 100vh;
  width: ${ ({ width }) => width ?? '100%' };
  z-index: ${ ({ theme }) => theme.zIndex.high };
`

const SAbsoluteChildren = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
`

const SSectionTitleWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 8rem;
  font-size: ${ ({ theme }) => theme.text.size.large100 };
  color: #fff;
  padding-bottom: 1rem;
  border-bottom: ${ ({ theme }) => `1px solid ${ theme.colors.primary.main }` };
  z-index: ${ ({ theme }) => theme.zIndex.high };
`

const SSectionNumber = styled.span`
  color: ${ ({ theme }) => theme.colors.primary.main };
  padding-left: 2rem;
  padding-right: 1rem;
`
const SSectionContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`

type Props = {
    children: JSX.Element[] | JSX.Element
    absoluteChildren?: JSX.Element,
    title?: string,
    number?: number,
    width?: string,
}

export const SectionLayout = ({ children, title, number, absoluteChildren, width }: Props) => {
    return <SSectionContainer>
        { title && <SSectionTitleWrapper initial={{left: -150, opacity: 0}}
                                         whileInView={{left: 0, opacity: 1}}
                                         viewport={{ once: true }}
                                         transition={{ ease: "easeOut", duration: 0.5 }} >
          <SSectionNumber>{ `0${ number }.` }</SSectionNumber>
            { title }
        </SSectionTitleWrapper> }
        <SSection { ...{ width } }>
            { children }
        </SSection>
        { absoluteChildren && <SAbsoluteChildren>
            { absoluteChildren }
        </SAbsoluteChildren> }
    </SSectionContainer>
}
