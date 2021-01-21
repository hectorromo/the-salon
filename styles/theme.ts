export type ThemeType = typeof theme;

export enum ThemeColors {
  primary = '#b69f58',
  background = '#f9f9f9',
  text = '#202020',
  paragraph = '#2b2b2b',
  border = '#eeeeee',
  grayLight = '#d8d8d8',
  grayDark = '#656565',
  white = '#ffffff',
  black = '#000000',
}

export enum ThemeFonts {
  heading = 'MillerBanner, serif',
  base = 'HelveticaNeue, sans-serif',
}

export enum ThemeFontWeight {
  thin = 100,
  light = 300,
  normal = 400,
  bold = 600,
}

export enum ThemeTypography {
  large = '22px',
  medium = '20px',
  normal = '15px',
  small = '13px',
  xSmall = '11px',
}

export enum ThemeGutters {
  mobileX = '15px',
  mobileXNormal = '30px',
  mobileXLarge = '50px',
}

export const theme = {
  colors: ThemeColors,
  fonts: ThemeFonts,
  fontWeight: ThemeFontWeight,
  typography: ThemeTypography,
  gutters: ThemeGutters,
};