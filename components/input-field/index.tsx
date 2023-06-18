import { ComponentProps } from "react";
import { styled } from "@/theme";
import { ValidationError } from "@formspree/react";
import { hexToRGBA } from "@/utils/hexToRGBA";

const SInput = styled.input`
  height: 3rem;
  border-radius: 1rem;
  padding-left: 1rem;
  outline: none;
  border: none;
  caret-color: ${ ({ theme }) => theme.colors.primary.main };
  color: ${ ({ theme }) => theme.colors.gray.lightest };
  background: ${ ({ theme }) => hexToRGBA(theme.colors.secondary.light, 0.4) };
  transition: ${ ({ theme }) => theme.transition.SMOOTH };

  &:focus {
    background: ${ ({ theme }) => hexToRGBA(theme.colors.secondary.light, 0.6) };
  }
`

const STextArea = styled.textarea`
  min-height: 10rem;
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
  border: none;
  caret-color: ${ ({ theme }) => theme.colors.primary.main };
  color: ${ ({ theme }) => theme.colors.gray.lightest };
  background: ${ ({ theme }) => hexToRGBA(theme.colors.secondary.light, 0.4) };
  transition: ${ ({ theme }) => theme.transition.SMOOTH };
  resize: none;

  &:focus {
    background: ${ ({ theme }) => hexToRGBA(theme.colors.secondary.light, 0.6) };
  }
`
const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem
`

const SLabel = styled.label`
  font-size: ${ ({ theme }) => theme.text.size.small200 };
  color: ${ ({ theme }) => theme.colors.gray.main };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.widest };
  padding-left: 0.5rem;
`

export enum InputType {
    TEXT = 'text',
    TEXT_AREA = 'textarea',
}

type defaultInputsProps =
    ComponentProps<'input'> &
    ComponentProps<'textarea'>;

type Props = {
    label: string
    errors: any[]
    inputType?: InputType
} & Omit<defaultInputsProps, 'ref'>

export const InputField = ({ inputType = InputType.TEXT, name, label, errors, ...inputProps }: Props) => {

    const InputMap = {
        [InputType.TEXT]: <SInput { ...{ name } } { ...inputProps } />,
        [InputType.TEXT_AREA]: <STextArea { ...{ name } } { ...inputProps } />
    }

    return <SInputWrapper>
        <SLabel htmlFor={ name }>
            { label }
        </SLabel>
        { InputMap[inputType] }
        <ValidationError
            prefix={ name }
            field={ name }
            errors={ errors }
        />
    </SInputWrapper>
}
