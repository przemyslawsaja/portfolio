import { DefaultTFuncReturn } from 'i18next';
import React, { ComponentProps, ReactElement } from 'react';
import styled, { css } from 'styled-components'

const SButton = styled.button<{buttonStyles: any}>`
  width: 100%;
  padding: 1.5rem;
  
  ${({buttonStyles}) => buttonStyles}
`

const outlineButtonStyles = css`
  border-radius: 1rem;
  border: 2px solid ${({theme}) => theme.colors.primary.main};
  color: ${({theme}) => theme.colors.primary.main};
  transition: ${ ({ theme }) => theme.transition.SMOOTH };

  &:hover {
    background: ${({theme}) => theme.colors.primary.main};
    color: ${({theme}) => theme.colors.secondary.main};
  }
`

const primaryButtonStyles = css`
  border-radius: 1rem;
  background: ${({theme}) => theme.colors.primary.main};
  color: #fff;
  transition: ${ ({ theme }) => theme.transition.SMOOTH };
  
  &:hover {
    background: ${({theme}) => theme.colors.primary.darker};
  }
`

export enum ButtonVariant {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

const buttonStyleMap = {
    [ButtonVariant.OUTLINE]: outlineButtonStyles,
    [ButtonVariant.PRIMARY]: primaryButtonStyles
}

type Props = {
    children: ReactElement | DefaultTFuncReturn,
    variant?: ButtonVariant
} & Omit<ComponentProps<'button'>, 'ref'>

export const Button = ({ children, variant = ButtonVariant.PRIMARY, ...props }: Props) => {
    return <SButton {...props} buttonStyles={buttonStyleMap[variant]}>
        {children}
    </SButton>
}
