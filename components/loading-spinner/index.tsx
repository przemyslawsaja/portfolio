import React from 'react';
import { styled } from "@/theme";

const loaderSize = 240;

const SLoadingCircle = styled.div`
  width:  ${`${loaderSize}px`};
  height:  ${`${loaderSize}px`};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
  position: relative;
`

const SLoaderContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${ ({ theme }) => theme.text.size.small300 };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.widest };
  color: ${ ({ theme }) => theme.colors.primary.main };
`

const SLoaderLineMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width:  ${`${loaderSize/2}px`};
  height: ${`${loaderSize}px`};
  overflow: hidden;
  transform-origin:  ${`${loaderSize/2}px`}  ${`${loaderSize/ 2}px`};
  -webkit-mask-image: -webkit-linear-gradient(top,#000000,rgba(0,0,0,0));
  animation: rotate 1.2s infinite linear;

  @keyframes rotate { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);}}
`

const SLoaderLine = styled.div`
  width:  ${`${loaderSize}px`};
  height:  ${`${loaderSize}px`};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${ ({ theme }) => theme.colors.primary.main };
  `
export const LoadingSpinner = () => {
    return <SLoadingCircle>
        <SLoaderContent>Loading...</SLoaderContent>
        <SLoaderLineMask>
            <SLoaderLine></SLoaderLine>
        </SLoaderLineMask>
    </SLoadingCircle>
}
