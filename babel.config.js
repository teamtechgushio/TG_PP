module.exports = api => {
  api.cache(true);

  const modules = [
    'assets',
    'components',
    'constants',
    'config',
    'layouts',
    'navigation',
    'screens',
    'services',
    'stores',
    'styles',
    'utils',
    'types',
  ];

  const alias = modules.reduce(
    (aliasAcc, moduleName) => {
      aliasAcc[`@${moduleName}`] = `./src/${moduleName}`;
      return aliasAcc;
    },
    {
      // explicitly add redux to avoid conflict with local redux folder's package.json
      redux: './node_modules/redux',
    },
  );

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias,
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
