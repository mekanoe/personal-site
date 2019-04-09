export const breakpoints = {
  xs: 0,
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280
}

const mediaTemplateLiteral = (size, ...stuff) =>
  `@media screen and (min-width: ${size}px) {\n${stuff.join()}\n};`

export const xs = mediaTemplateLiteral.bind(null, breakpoints.xs)
export const sm = mediaTemplateLiteral.bind(null, breakpoints.sm)
export const md = mediaTemplateLiteral.bind(null, breakpoints.md)
export const lg = mediaTemplateLiteral.bind(null, breakpoints.lg)
export const xl = mediaTemplateLiteral.bind(null, breakpoints.xl)
