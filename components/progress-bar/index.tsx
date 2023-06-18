import { styled } from "@/theme";
import { useEffect, useState } from "react";

const SProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.7rem 0.5rem;
  font-size: ${ ({ theme }) => theme.text.size.small200 };
  color: ${ ({ theme }) => theme.colors.gray.light };

`
const SProgressBarWrapper = styled.div`
  border-radius: ${ ({ theme }) => theme.border.radius.rounded };
  height: 1rem;
  background: ${ ({ theme }) => theme.colors.secondary.light };
`

const SProgressBar = styled.div<{ width?: number }>`
  background: ${ ({ theme }) => theme.colors.primary.main };
  height: 100%;
  transition: 0.5s ease-in-out;
  border-radius: ${ ({ theme }) => theme.border.radius.rounded };
  width: ${ ({ width }) => `${ width }%` };
`

type Props = {
    label: string,
    percentage: number
}

export const ProgressBar = ({ label, percentage }: Props) => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        if (completed >= percentage) {
            return;
        }

        setCompleted(completed + 1)
    }, [completed])

    return <SProgressContainer>
        <span>{ label }</span>
        <SProgressBarWrapper>
            <SProgressBar width={ completed } />
        </SProgressBarWrapper>
    </SProgressContainer>
}
