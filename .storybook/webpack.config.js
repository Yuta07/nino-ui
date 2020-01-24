// ref: [https://storybook.js.org/docs/configurations/typescript-config/]
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
  });
  config.resolve.extensions.push('.ts', '.tsx', 'js', '.jsx');

  return config;
};
