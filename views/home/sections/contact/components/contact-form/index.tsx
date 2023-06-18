import {WindowTab} from "@/components/window-tab";
import {useForm} from "@formspree/react";
import {styled} from "@/theme";
import {InputField, InputType} from "@/components/input-field";
import {Button, ButtonVariant} from "@/components/button";
import {useTranslation} from "next-i18next";
import Lottie from 'react-lottie';
import Success from '@/assets/lotties/success-mark.json';

const SForm = styled.form`
  display: grid;
  grid-template-colums: 1fr;
  gap: 1.5rem;
`

const SContactFormWrapper = styled.div`
  margin-top: 3rem;
`

const SButton = styled(Button)`
  letter-spacing: ${({theme}) => theme.text.spacing.widest};
`

const SSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`

const SSuccessMassage = styled.span`
  text-align: center;
  padding: 0 5rem;
  font-size: ${ ({ theme }) => theme.text.size.small300 };
`
export const ContactForm = () => {
    const {t} = useTranslation('contact');
    const [{errors, succeeded}, handleSubmit] = useForm("xlekodjq");

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Success,
    };

    if (succeeded) {
        return <WindowTab title={'contact-form.tsx'}>
            <SSuccessContainer>
                <Lottie
                    options={defaultOptions}
                    height={50}
                    width={50}
                />
                <SSuccessMassage>Thank you for reaching out! Your message has been successfully submitted. I will get back to you as soon as possible. Have a great day!</SSuccessMassage>
            </SSuccessContainer>
        </WindowTab>
    }

    return <SContactFormWrapper>
        <WindowTab title={'contact-form.tsx'}>
            <SForm onSubmit={handleSubmit}>
                <InputField id="email" type="email" name="email" errors={errors} label={"E-mail"}/>
                <InputField id="subject" type="text" name="subject" errors={errors} label={"Subject"}/>
                <InputField inputType={InputType.TEXT_AREA}
                            id="Message"
                            type="text"
                            name="message"
                            errors={errors}
                            label={"Message"}/>
                <SButton variant={ButtonVariant.OUTLINE}>
                    {t('send-message')}
                </SButton>
            </SForm>
        </WindowTab>
    </SContactFormWrapper>
}
