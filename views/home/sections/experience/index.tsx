import { SectionLayout } from "@/layouts/section-layout";
import { useTranslation } from "next-i18next";
import { styled } from "@/theme";
import { BsFillPlayFill } from 'react-icons/bs';
import { STEP_TRANSLATION_KEYS, STEP_TRANSLATION_LIST_ITEMS_KEYS } from "./constants";
import { defaultTheme } from "@/theme/default-theme";
import BgMesh from "@/assets/images/bg-mesh.svg";
import Image from "next/image";
import { useState } from "react";
import {useEventListener} from "usehooks-ts";
import {motion} from "framer-motion";

const STimelineStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`

const SCompany = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.medium100 };
  color: ${ ({ theme }) => theme.colors.secondary.light };
`

const SPosition = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.large100 };
  color: ${ ({ theme }) => theme.colors.primary.main };
`

const STimeFrame = styled.span`
  text-align: end;
  color: ${ ({ theme }) => theme.colors.gray.main };
  font-size: ${ ({ theme }) => theme.text.size.medium100 };
`

const STimeRange = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.small300 };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.wide };
  padding-bottom: 1rem;
`

const SListTitle = styled.span`
  color: ${ ({ theme }) => theme.colors.secondary.lightest };
  font-size: ${ ({ theme }) => theme.text.size.small300 };
  font-weight: bold;
  text-transform: uppercase;
`

const SListItem = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${ ({ theme }) => theme.text.size.small300 };
  color: ${ ({ theme }) => theme.colors.gray.lightest };
  padding: 0.5rem 0;
`

const SStepMarker = styled.div<{ outlined: boolean }>`
  min-width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: ${ ({ outlined }) => outlined ? '2px solid white' : 'none' };
  background-color: ${ ({ theme }) => theme.colors.primary.main };
`
const SPositionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr;
  gap: 2rem;
  align-items: center;
  margin-left: -17.8rem;
  width: 70.5rem;
`

const TimelineWrapper = styled.div`
  position: relative;
`

const SLine = styled.div`
  position: absolute;
  left: -2.8rem;
  top: 0;
  width: 1px;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(134, 134, 134, 0.6) 22%, rgba(134, 134, 134, 0.6) 67%, rgba(255, 255, 255, 0) 100%);
  z-index: ${ ({ theme }) => theme.zIndex.low };
  height: 100%;
`

const SMarkerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

const SBlueLight =  styled.div<{ $offsetY: number, $offsetX: number}>`
  position: absolute;
  background: radial-gradient(circle, rgba(11, 223, 255, 0.13) 0%, rgba(255, 255, 255, 0) 45%);
  width: 120rem;
  height: 120rem;
  right: ${({ $offsetX }) => `-${$offsetX/20 + 400}px` };
  bottom: ${({ $offsetY }) => `-${$offsetY/20 + 50}px` };
`

const SPinkLight =  styled.div<{ $offsetY: number, $offsetX: number}>`
  position: absolute;
  width: 120rem;
  height: 120rem;
  background: radial-gradient(circle, rgba(255, 55, 234, 0.21) 0%, rgba(255, 255, 255, 0) 48%);
  right: ${({ $offsetX }) => `${$offsetX/10 - 350}px` };
  top: ${({ $offsetY }) => `-${$offsetY/10 + 100}px` };
`

const SDarkBlueLight = styled.div<{ $offsetY: number, $offsetX: number}>`
  position: absolute;
  width: 120rem;
  height: 120rem;
  background: radial-gradient(circle, rgba(11, 79, 255, 0.2) 0%, rgba(255, 255, 255, 0) 53%);
  right: ${({ $offsetX }) => `-${$offsetX/10 + 400}px` };
  top: ${({ $offsetY }) => `${$offsetY/5 - 600}px` };
`

const SImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.lowest };
`

export const Experience = () => {
    const { t } = useTranslation('experience')
    const [positionY, setPositionY] = useState(0);
    const [positionX, setPositionX] = useState(0);

    useEventListener('mousemove', e => {
        setPositionY(e.screenY)
        setPositionX(e.screenX)
    })

    return (
        <SectionLayout
            absoluteChildren={ <SImage src={ BgMesh } alt="" layout="fill" objectFit="cover"/> }
            title={ t('title') as string }
            number={ 2 }>
            <SDarkBlueLight  $offsetY={positionY} $offsetX={positionX} />
            <SBlueLight  $offsetY={positionY} $offsetX={positionX} />
            <SPinkLight   $offsetY={positionY} $offsetX={positionX} />
            <TimelineWrapper>
                { STEP_TRANSLATION_KEYS.map((key, index) => {
                    return <STimelineStep key={ key } initial={{opacity: 0}}
                                          whileInView={{opacity: 1}}
                                          viewport={{ once: true }}
                                          transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}>
                        <SCompany>{ t(`${ key }.company`) }</SCompany>
                        <SPositionWrapper>
                            <SMarkerWrapper>
                                <STimeFrame>{ t(`${ key }.timeLabel`) }</STimeFrame>
                                <SStepMarker outlined={ index === 0 }/>
                            </SMarkerWrapper>
                            <SPosition>{ t(`${ key }.position`) }</SPosition>
                        </SPositionWrapper>
                        <STimeRange>{ t(`${ key }.timeFrom`) + ' - ' + t(`${ key }.timeTo`) }</STimeRange>
                        <SListTitle>{ t(`${ key }.listTitle`) }</SListTitle>
                        { STEP_TRANSLATION_LIST_ITEMS_KEYS.map(listItemKey => {
                            return <SListItem key={ listItemKey }>
                                <BsFillPlayFill color={ defaultTheme.colors.primary.main }/>
                                <span> { t(`${ key }.${ listItemKey }`) }</span>
                            </SListItem>
                        }) }
                    </STimelineStep>
                }) }
                <SLine/>
            </TimelineWrapper>
        </SectionLayout>
    )
}
