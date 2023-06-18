import { SectionLayout } from "@/layouts/section-layout";
import BgMesh from "@/assets/images/bg-mesh.svg";
import { styled } from "@/theme";
import Image from "next/image";
import FirstMockup from "@/assets/images/mockup-1.svg";
import SecondMockup from "@/assets/images/mockup-2.svg";
import { useTranslation } from "next-i18next";
import { AiFillCaretRight } from 'react-icons/ai'
import { defaultTheme } from "@/theme/default-theme";

const SImage = styled(Image)`
  margin-left: -20rem;
`

const SFirstImage = styled(SImage)`
  width: 50rem;
  height: 70rem;
  position: absolute;

`

const SSecondImage = styled(SImage)`
  width: 40rem;
  position: absolute;
  left: 20rem;
  z-index: -10;
`

const SSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const SSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SContentTitle = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.large100 };
  color: ${ ({ theme }) => theme.colors.primary.main };
`

const SContentDescription = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.medium200 };
  line-height: ${ ({ theme }) => theme.text.lineHeight.snug };
`

const SSubtitle = styled.span`
  font-size: ${ ({ theme }) => theme.text.size.medium100 };
  color: ${ ({ theme }) => theme.colors.secondary.lightest };
  font-weight: bold;
  text-transform: uppercase;
`

const STechnologiesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0;
`

const STechnologyItem = styled.li`
  display: flex;
  gap: 1rem;
`

const SCardsGlow = styled.div`
  position: absolute;
  width: 100rem;
  height: 100rem;
  background: radial-gradient(circle, rgba(123, 231, 153, 0.2) 0%, rgba(123, 231, 153, 0) 53%);
  transition: ease-in-out 1s;
  left: -45rem;
  top: -15rem;
  z-index: ${ ({ theme }) => theme.zIndex.lowest };

`

const TECHNOLOGY_TRANSLATION_KEYS = [
    'technology-1',
    'technology-2',
    'technology-3',
    'technology-4',
    'technology-5',
    'technology-6',
    'technology-7',
    'technology-8',
    'technology-9',
    'technology-10',
]

export const Work = () => {
    const { t } = useTranslation('work');
    return <SectionLayout
        absoluteChildren={ <Image src={ BgMesh } alt="" layout="fill" objectFit="cover"/> }
        title={ t('title') as string }
        number={ 3 }>
        <SSectionGrid>
            <div>
                <SFirstImage src={ FirstMockup } alt="" objectFit="cover"/>
                <SSecondImage src={ SecondMockup } alt="" objectFit="cover"/>
                <SCardsGlow />
            </div>
            <SSectionContent>
                <SContentTitle>{t('work-title')}</SContentTitle>
                <SContentDescription>
                    {t('work-description')}
                </SContentDescription>
                <SSubtitle>{t('work-subtitle')}</SSubtitle>
                <STechnologiesList>
                    {TECHNOLOGY_TRANSLATION_KEYS.map((technology, index) => {
                        //TODO: add arrow icon from react-icons
                        return <STechnologyItem key={index}>
                            <AiFillCaretRight color={ defaultTheme.colors.primary.main }/>
                            {t(technology)}
                        </STechnologyItem>
                    })}
                </STechnologiesList>
            </SSectionContent>
        </SSectionGrid>

    </SectionLayout>
}
