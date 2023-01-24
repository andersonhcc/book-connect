module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",{
          root: ["./src"],
          alias:{
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@components': './src/components',
          }
        },
      ],
      'react-native-reanimated/plugin',
    ]
    
  };
};