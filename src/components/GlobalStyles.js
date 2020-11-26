import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    --card-bg-color: ${({ theme }) => theme.cardBackground};
    --text-dark-color: ${({ theme }) => theme.textDarkColor};
    --text-light-color: ${({ theme }) => theme.textLightColor};
    --border-color-light: ${({ theme }) => theme.borderColorLight};
    transition: all 0.50s linear;
  }
  `
