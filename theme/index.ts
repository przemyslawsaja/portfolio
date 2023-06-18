import baseStyled, { ThemedStyledInterface } from "styled-components";
import { defaultTheme } from "@/theme/default-theme";

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
