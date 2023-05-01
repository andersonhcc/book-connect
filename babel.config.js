module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "module:react-native-dotenv",
      [
        "module-resolver",{
          root: ["./src"],
          alias:{
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@components': './src/components',
            '@utils': './src/utils',
            '@global': './src/global',
            '@services': './src/services',
            '@models': './src/models',
            '@animations': './src/animations',
          }
        },
      ],
      'react-native-reanimated/plugin',
      'transform-inline-environment-variables',

    ]
    
  };
};
