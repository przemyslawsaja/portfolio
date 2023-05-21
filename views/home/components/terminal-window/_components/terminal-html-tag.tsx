import { styled } from "@/theme";

const SHtmlTag = styled.span`
  color: ${ ({ theme }) => theme.colors.gray.light };
`

const STag = styled.span`
  color: ${ ({ theme }) => theme.colors.quaternary.main };
`

const SAttribute = styled.span`
  color: ${ ({ theme }) => theme.colors.tertiary.light };
`

type Props = {
    tag: string,
    attribute?: string,
    attributeValue?: string,
    close?: boolean,
}

export const TerminalHtmlTag = ({ tag, attribute, attributeValue, close }: Props) => {

    if(close){
        return <SHtmlTag>
            <span>{'</'}</span>
            <STag>{`${tag}`}</STag>
            <span>{'>'}</span>
        </SHtmlTag>
    }

    return <SHtmlTag>
        <span>{'<'}</span>
        <STag>{tag} </STag>
        <span>{attribute}=</span>
        <SAttribute>&quot;{attributeValue}&quot;</SAttribute>
        <span>{'>'}</span>
    </SHtmlTag>
}
