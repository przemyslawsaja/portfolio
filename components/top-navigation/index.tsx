import { styled } from "@/theme";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import { NAVIGATION_BACKGROUND_VISIBILITY_SCROLL } from "@/components/top-navigation/top-navigation.constants";
import { useEventListener } from "usehooks-ts";
import { hexToRGBA } from "@/utils/hexToRGBA";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";

export const SNavigationWrapper = styled(motion.div)<{
    $isNavBackgroundVisible: boolean;
}>`
  width: 100vw;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ ({ theme }) => theme.zIndex.higher };
  transition: ${ ({ theme }) => theme.transition.SMOOTH };
  box-shadow: ${ ({ theme, $isNavBackgroundVisible }) =>
          $isNavBackgroundVisible ? theme.shadow.SMOOTH_DARK : 'none' };
  backdrop-filter: ${ ({ $isNavBackgroundVisible }) =>
          $isNavBackgroundVisible ? 'blur(1rem)' : 'none' };
  background: ${ ({ theme, $isNavBackgroundVisible }) =>
          $isNavBackgroundVisible ? hexToRGBA(theme.colors.gray.light, 0.1) : 'none' };
`

const SLogoWrapper = styled.div`
  display: flex;
  font-size: ${ ({ theme }) => theme.text.size.large100 };
`

const SLogoFirstPart = styled.div`
  color: ${ ({ theme }) => theme.colors.primary.main };
`

const SLogoSecondPart = styled.div`
  color: white;
`

const SNavigationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem;
`

const SNavigationItem = styled.li`
  font-size: ${ ({ theme }) => theme.text.size.medium100 };
  color: ${ ({ theme }) => theme.colors.gray.lightest };
  letter-spacing: ${ ({ theme }) => theme.text.spacing.wide };
  cursor: pointer;

  &:hover {
    color: ${ ({ theme }) => theme.colors.primary.main };
  }
`

const SNavigationItemCounter = styled.span`
  color: ${ ({ theme }) => theme.colors.primary.main };
`

export const TopNavigation = () => {
    const { t } = useTranslation('welcome');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isNavBackgroundVisible, setNavigationBackground] = useState(false);

    const setNavigationBackgroundHandler = (scrollValue: number): void => {
        return scrollValue > NAVIGATION_BACKGROUND_VISIBILITY_SCROLL
            ? setNavigationBackground(true)
            : setNavigationBackground(false);
    };

    useEventListener(
        'scroll',
        (e) => setNavigationBackgroundHandler((e.currentTarget as Window)?.scrollY),
        wrapperRef,
    );

    const navigationItems = [
        { label: t('about'), selector: 'about' },
        { label: t('experience'), selector: 'experience' },
        { label: t('work'), selector: 'work' },
        { label: t('contact'), selector: 'contact', isButton: true },
    ];

    return <SNavigationWrapper $isNavBackgroundVisible={ isNavBackgroundVisible } { ...fadeIn(4) }>
        <SLogoWrapper>
            <SLogoFirstPart>P</SLogoFirstPart>
            <SLogoSecondPart>s</SLogoSecondPart>
        </SLogoWrapper>
        <SNavigationList>
            { navigationItems.map((navigationItem, index) =>
                <SNavigationItem key={ index }>
                    <SNavigationItemCounter>0{ index + 1 }. </SNavigationItemCounter>{ navigationItem.label }
                </SNavigationItem>) }
        </SNavigationList>
    </SNavigationWrapper>
}
