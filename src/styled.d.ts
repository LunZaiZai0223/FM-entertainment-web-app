import 'styled-components'

// 額外建立 styled.d.ts 建立 theme 所需要的屬性
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      steelBlue: string
      tealBlue: string
      emeraldGreen: string
      fieryRed: string
    }
    fonts: string
  }
}
