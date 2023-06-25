// ref. https://www.agney.dev/blog/styled-components-&-typescript#3-typing-the-theme

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}
