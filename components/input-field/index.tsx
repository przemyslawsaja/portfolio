import { ComponentProps, LegacyRef } from "react";
import { styled } from "@/theme";
import { ValidationError } from "@formspree/react";

const SInput = styled.input`
  height: 3rem;
  border-radius: 1rem;
  padding-left: 1rem;
  outline: none;
  border: none;
  background: ${({theme}) => theme.colors.gray.light};
  transition: ${ ({ theme }) => theme.transition.SMOOTH };
  
  &:focus {
    background: ${({theme}) => theme.colors.gray.lightest};
  }
`

const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem
`

const SLabel = styled.label`
  font-size: ${({theme}) => theme.text.size.small200};
  color: ${({theme}) => theme.colors.gray.main};
  letter-spacing: ${ ({ theme }) => theme.text.spacing.widest };
  padding-left: 0.5rem;
`

type Props = {
    label: string
    errors: any[]
} & Omit<ComponentProps<'input'>, 'ref'>

export const InputField = ({ name, label, errors, ...inputProps }: Props) => {
    return <SInputWrapper>
        <SLabel htmlFor={name}>
            { label }
        </SLabel>
        <SInput {...{name}} {...inputProps} />
        <ValidationError
            prefix={name}
            field={name}
            errors={errors}
        />
    </SInputWrapper>
}
