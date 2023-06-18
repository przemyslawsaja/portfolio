import { styled } from "@/theme";
import BgMesh from "@/assets/images/bg-mesh.svg";
import Image from "next/image";
import Lottie from "react-lottie";
import Loader from "@/assets/lotties/pink-loader.json";

export const SLoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({theme}) => theme.colors.secondary.darker };
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme}) => theme.zIndex.highest };
`

const SImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100000;
`

export const LoadingScreen = () => {

    const defaultOptions = {
        autoplay: true,
        animationData: Loader,
    };

    return <SLoadingWrapper>
        <SImage src={ BgMesh } alt="" layout="fill" objectFit="cover"/>
        <Lottie
            options={defaultOptions}
            height={200}
            width={200}
        />
    </SLoadingWrapper>
}
