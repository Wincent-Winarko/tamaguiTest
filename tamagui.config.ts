import {createFont, createTamagui, createTheme, createTokens} from 'tamagui'; // or '@tamagui/core'
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/themes';
import {media} from '@tamagui/config';

const genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124,
} as const;

const publicSansFont = createFont({
  family: 'PublicSans-Regular',
  size: {
    xxs: 12,
    xs: 14,
    sm: 16,
    true: 16,
    md: 18,
    lg: 22,
    xl: 28,
    xxl: 36,
    ...genericFontSizes,
  },
  lineHeight: {
    xxs: 19,
    xs: 19,
    sm: 24,
    true: 24,
    md: 24,
    lg: 27.5,
    xl: 35,
    xxl: 45,
  },

  weight: {
    sm: '400',
  },

  face: {
    400: {normal: 'PublicSans-Regular', italic: 'PublicSans-Italic'},
    700: {normal: 'PublicSans-Bold'},
  },
});

const nswColor = {
  grey01: '#22272b',
  grey02: '#495054',
  grey03: '#cdd3d6',
  grey04: '#ebebeb',
  green01: '#004000',
  green02: '#00aa45',
  green03: '#a8edb3',
  green04: '#dbfadf',
  teal01: '#0b3f47',
  teal02: '#2e808e',
  teal03: '#8cdbe5',
  teal04: '#d1eeea',
  blue01: '#002664',
  blue02: '#146CFD',
  blue03: '#8CE0FF',
  blue04: '#CBEDFD',
  purple01: '#441170',
  purple02: '#8055F1',
  purple03: '#CEBFFF',
  purple04: '#E6E1FD',
  fuschia01: '#65004D',
  fuschia02: '#D912AE',
  fuschia03: '#F4B5E6',
  fuschia04: '#fddef2',
  red01: '#630019',
  red02: '#d7153a',
  red03: '#ffb8c1',
  red04: '#ffe6ea',
  orange01: '#941b00',
  orange02: '#f3631b',
  orange03: '#ffce99',
  orange04: '#fdeddf',
  yellow01: '#694800',
  yellow02: '#faaf05',
  yellow03: '#fde79a',
  yellow04: '#fff4cf',
  brown01: '#523719',
  brown02: '#b68d5d',
  brown03: '#e8d0b5',
  brown04: '#ede3d7',
  black: '#000000',
  white: '#ffffff',
  offWhite: '#f2f2f2',
};

export const nswTokens = createTokens({
  ...tokens,
  color: nswColor,
});

export const nswThemes = createTheme({
  color1: 'hsl(206, 100%, 99.2%)',
  color2: 'hsl(210, 100%, 98.0%)',
  color3: 'hsl(209, 100%, 96.5%)',
  color4: 'hsl(210, 98.8%, 94.0%)',
  color5: 'hsl(209, 95.0%, 90.1%)',
  color6: 'hsl(209, 81.2%, 84.5%)',
  color7: 'hsl(206, 81.9%, 65.3%)',
  color8: 'hsl(206, 100%, 50.0%)',
  color9: 'hsl(208, 100%, 47.3%)',
  color10: 'hsl(211, 100%, 43.2%)',
  color11: 'hsl(211, 100%, 15.0%)',
  color12: 'hsl(0, 0%, 9.0%)',
  background: nswColor.blue01,
  backgroundHover: 'hsl(209, 100%, 96.5%)',
  backgroundPress: 'hsl(210, 98.8%, 94.0%)',
  backgroundFocus: 'hsl(209, 95.0%, 90.1%)',
  backgroundStrong: 'hsl(206, 100%, 99.2%)',
  backgroundTransparent: 'hsla(206, 100%, 99.2%, 0)',
  color: 'white',
  colorHover: 'hsl(211, 100%, 15.0%)',
  colorPress: 'hsl(0, 0%, 9.0%)',
  colorFocus: 'hsl(211, 100%, 15.0%)',
  colorTransparent: 'hsla(211, 100%, 15.0%, 0)',
  borderColor: 'hsl(210, 98.8%, 94.0%)',
  borderColorHover: 'hsl(209, 95.0%, 90.1%)',
  borderColorFocus: 'hsl(210, 98.8%, 94.0%)',
  borderColorPress: 'hsl(210, 98.8%, 94.0%)',
  placeholderColor: 'hsl(208, 100%, 47.3%)',
  grey01: nswTokens.color.grey01,
  grey02: nswTokens.color.grey02,
  grey03: nswTokens.color.grey03,
  grey04: nswTokens.color.grey04,
  green01: nswTokens.color.green01,
  green02: nswTokens.color.green02,
  green03: nswTokens.color.green03,
  green04: nswTokens.color.green04,
  teal01: nswTokens.color.teal01,
  teal02: nswTokens.color.teal02,
  teal03: nswTokens.color.teal03,
  teal04: nswTokens.color.teal04,
  blue01: nswTokens.color.blue01,
  blue02: nswTokens.color.blue02,
  blue03: nswTokens.color.blue03,
  blue04: nswTokens.color.blue04,
  purple01: nswTokens.color.purple01,
  purple02: nswTokens.color.purple02,
  purple03: nswTokens.color.purple03,
  purple04: nswTokens.color.purple04,
  fuschia01: nswTokens.color.fuschia01,
  fuschia02: nswTokens.color.fuschia02,
  fuschia03: nswTokens.color.fuschia03,
  fuschia04: nswTokens.color.fuschia04,
  red01: nswTokens.color.red01,
  red02: nswTokens.color.red02,
  red03: nswTokens.color.red03,
  red04: nswTokens.color.red04,
  orange01: nswTokens.color.orange01,
  orange02: nswTokens.color.orange02,
  orange03: nswTokens.color.orange03,
  orange04: nswTokens.color.orange04,
  yellow01: nswTokens.color.yellow01,
  yellow02: nswTokens.color.yellow02,
  yellow03: nswTokens.color.yellow03,
  yellow04: nswTokens.color.yellow04,
  brown01: nswTokens.color.brown01,
  brown02: nswTokens.color.brown02,
  brown03: nswTokens.color.brown03,
  brown04: nswTokens.color.brown04,
  black: nswTokens.color.black,
  white: nswTokens.color.white,
  offWhite: nswTokens.color.offWhite,
});

const config = createTamagui({
  fonts: {
    heading: publicSansFont,
    body: publicSansFont,
  },

  tokens: nswTokens,
  themes: {nsw: nswThemes, ...themes},
  shorthands,
  media,
});

type AppConfig = typeof config;
// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config;
