import {styled} from "@/theme";
import {SectionLayout} from "@/layouts/section-layout";
import React from "react";
import Image from "next/image";
import Portrait from "@/assets/images/portrait.png";
import {motion} from "framer-motion";

const SAboutContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  position: absolute;
`

const SAboutContent = styled.div`
  font-size: ${({theme}) => theme.text.size.medium300};
  width: 100%;
  line-height: 3rem;
`

const SBackgroundTag = styled.div`
  color: ${({theme}) => theme.colors.secondary.light};
  letter-spacing: ${({theme}) => theme.text.spacing.widest};
  margin: 1rem 0 1rem -5rem;
`

const SBackgroundParagraph = styled(SBackgroundTag)`
  margin: 1rem 0 1rem -2rem;
`

export const About = () => {
    return (
        <SectionLayout
            title={'About'}
            number={1}>
            <SAboutContainer>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                >
                    <SBackgroundTag>{'<section>'}</SBackgroundTag>
                    <SBackgroundParagraph>{'<p>'}</SBackgroundParagraph>
                    <SAboutContent>
                        Vivamus interdum in sem at semper. Orci varius natoque penatibus et magnis dis parturient
                        montes,
                        nascetur ridiculus mus. In vehicula sit amet velit non in sem at semper. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vehicula sit amet velit
                        non in
                        sem at semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. In vehicula sit amet velit non in sem at semper. Orci varius natoque penatibus et magnis
                        dis
                        parturient montes, nascetur ridiculus mus. In vehicula sit amet velit non
                    </SAboutContent>
                    <SBackgroundParagraph>{'</p>'}</SBackgroundParagraph>
                    <SBackgroundTag>{'</section>'}</SBackgroundTag>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            animate={{
                                scale: [0, 1],
                            }}
                            whileInView={{opacity: 1}}
                            viewport={{ once: true }}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 1, }}>
                    <Image
                        src={Portrait}
                        style={{objectFit: "contain", width: '45rem', height: '100%'}}
                        alt="Picture of the author"/>
                </motion.div>
            </SAboutContainer>
        </SectionLayout>
    )
}
