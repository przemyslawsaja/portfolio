import { SectionLayout } from "@/layouts/section-layout";
import { useTranslation } from "next-i18next";
import { styled } from "@/theme";
import { BsFillPlayFill } from 'react-icons/bs';
import { STEP_TRANSLATION_KEYS, STEP_TRANSLATION_LIST_ITEMS_KEYS } from "./constants";
import { defaultTheme } from "@/theme/default-theme";
import BgMesh from "@/assets/images/bg-mesh.svg";
import Image from "next/image";

const STimelineStep = styled.div`
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

const SBlueLight = styled.div`
  position: absolute;
  background: radial-gradient(circle, rgba(11, 223, 255, 0.13) 0%, rgba(255, 255, 255, 0) 45%);
  transform: scaleY(0.5) rotateX(40deg) rotateY(30deg);
  width: 250rem;
  height: 150rem;
  right: -110rem;
  top: -40rem;
`

const SPinkLight = styled.div`
  position: absolute;
  width: 120rem;
  height: 120rem;
  background: radial-gradient(circle, rgba(255, 55, 234, 0.21) 0%, rgba(255, 255, 255, 0) 48%);
  right: -65rem;
  top: -2rem;
  transform: scaleY(0.8) rotateX(50deg) rotateY(170deg);
`

const SDarkBlueLight = styled.div`
  position: absolute;
  width: 200rem;
  height: 150rem;
  background: radial-gradient(circle, rgba(11, 79, 255, 0.2) 0%, rgba(255, 255, 255, 0) 53%);
  right: -120rem;
  top: -60rem;
  transform: scaleY(0.5) rotateX(40deg) rotateY(40deg);
`

const SImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ ({ theme }) => theme.zIndex.lowest };
`

/**
 * NOTES
 * FIXED BACKGROUNDS - must have - zajebsice wyglada z glass design
 *
 */
export const Experience = () => {
    const { t } = useTranslation('experience')
    return (
        <SectionLayout
            absoluteChildren={ <SImage src={ BgMesh } alt="" layout="fill" objectFit="cover"/>
            }
            title={ 'Experience' }
            number={ 2 }>
            <SDarkBlueLight/>
            <SBlueLight/>
            <SPinkLight/>
            <TimelineWrapper>
                { STEP_TRANSLATION_KEYS.map((key, index) => {
                    return <STimelineStep key={ key }>
                        <SCompany>{ t(`${ key }.company`) }</SCompany>
                        <SPositionWrapper>
                            <SMarkerWrapper>
                                <STimeFrame>{ t(`${ key }.timeFrame`) }</STimeFrame>
                                <SStepMarker outlined={ index === 0 }/>
                            </SMarkerWrapper>
                            <SPosition>{ t(`${ key }.position`) }</SPosition>
                        </SPositionWrapper>
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
