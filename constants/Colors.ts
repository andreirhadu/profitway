/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#a97142';

export const Colors = {
  light: {
    text: '#11181C',
    infoText: 'rgba(0,0,0,0.67)',
    disableddText: 'rgba(0,0,0,0.33)',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    card: '#fff'
  },
  dark: {
    text: '#ECEDEE',
    infoText: 'rgba(255,255,255,0.67)',
    disabledText: 'rgba(255,255,255,0.33)',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    card: '#131418'
  },
};
