import {useTranslation} from "next-i18next";
import {styled} from "@/theme";
import {ContactForm} from "@/views/home/sections/contact/components/contact-form";

const STitle = styled.span`
  font-size: ${({theme}) => theme.text.size.large400};
  color: ${({theme}) => theme.colors.primary.main};
  font-weight: bold;
`

const SSection = styled.section`
  padding: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SDescription = styled.span`
  max-width: 50%;
  padding-top: 1rem;
  text-align: center;
`
const SContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-bottom: 10rem;
`
export const Contact = () => {
    const {t} = useTranslation('contact');

    return <SSection>
        <STitle>{t('title')}</STitle>
        <SDescription>{t('description')}</SDescription>
        <SContainer>
            <ContactForm/>
        </SContainer>
    </SSection>
}
