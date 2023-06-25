// 額外建立 styled.d.ts 建立 theme 所需要的屬性
// 但是這樣子做就必須在這邊的 interface 建立屬性後 theme 中的屬性也要建立對應的屬性（所以一次就要改兩邊的檔案）
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: {
//       primary: string
//       secondary: string
//       white: string
//       steelBlue: string
//       tealBlue: string
//       emeraldGreen: string
//       fieryRed: string
//     }
//     fonts: string
//   }
// }

// 改成用 typeof 讓 TypeScript 直接拿 theme 的屬性推斷型別（只要改 theme 的屬性即可）
// ref. https://pjchender.dev/npm/npm-styled-components/#%E4%BD%BF%E7%94%A8-theme-%E5%92%8C-themeprovider
import theme from './styles/theme'
import 'styled-components'

declare module 'styled-components' {
  type Theme = typeof theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
