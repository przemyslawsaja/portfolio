import styled from "styled-components";

export const SSection = styled.section`
  padding: 5rem 22rem;
  position: relative;
  height: 100vh;
`

type Props = {
    children: JSX.Element[]
}

export const HomeSection = ({ children }: Props) => {
    return <SSection>
        { children }
    </SSection>
}
