import Spline from '@splinetool/react-spline';
import { styled } from "@/theme";
import { ROOM_SCENE_URL } from "@/constants/spline";
import { SectionLayout } from "@/layouts/section-layout";
import { useAppContext } from "../../../../context/app-context";
import { useEffect, useState } from "react";
import React from "react";

const SAboutContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`

const SAboutContent = styled.div`
  font-size: ${ ({ theme }) => theme.text.size.medium300 };
  width: 100%;
  line-height: 3rem;
`

const SBackgroundTag = styled.div`
  color: ${ ({ theme }) => theme.colors.secondary.light };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.widest };
  margin: 1rem 0 1rem -5rem;
`

const SBackgroundParagraph = styled(SBackgroundTag)`
  margin: 1rem 0 1rem -2rem;
`
export const About = () => {
    return (
        <SectionLayout
            absoluteChildren={ <Spline scene={ ROOM_SCENE_URL } /> }
            title={ 'About' }
            number={ 1 }
            width='30%'>
            <SAboutContainer>
                <SBackgroundTag>{'<section>'}</SBackgroundTag>
                <SBackgroundParagraph>{'<p>'}</SBackgroundParagraph>
                <SAboutContent>
                    Vivamus interdum in sem at semper. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. In vehicula sit amet velit non in sem at semper. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vehicula sit amet velit non in
                    sem at semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. In vehicula sit amet velit non in sem at semper. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. In vehicula sit amet velit non
                </SAboutContent>
                <SBackgroundParagraph>{'</p>'}</SBackgroundParagraph>
                <SBackgroundTag>{'</section>'}</SBackgroundTag>
            </SAboutContainer>
        </SectionLayout>
    )
}
