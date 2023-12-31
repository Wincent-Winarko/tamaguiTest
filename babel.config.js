// only use babel-plugin for native:
process.env.TAMAGUI_TARGET = 'native';

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    // [
    //   'module:metro-react-native-babel-preset',
    //   {useTransformReactJSXExperimental: false},
    // ],
  ],
  plugins: [
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui.config.ts',
        importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction: process.env.NODE_ENV === 'development',
      },
    ],
    // be sure to set TAMAGUI_TARGET
    [
      'transform-inline-environment-variables',
      {
        include: ['TAMAGUI_TARGET'],
      },
    ],
  ],
};
