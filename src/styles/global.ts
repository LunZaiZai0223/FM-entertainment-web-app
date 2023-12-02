import { createGlobalStyle } from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fonts};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    line-height: 1;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }
  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  }
  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: auto;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  #root {
    height: 100%;
  }

  // 使用 createPortal 時，想要設定 html 註冊的根部元素時需要進來 createGlobalStyle 同步設定
  #toasts-portal {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 30px;
    }
  }
`

export default GlobalStyles
