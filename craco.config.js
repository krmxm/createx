const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import 'src/styles/_variables';
          @import 'src/styles/mixins/_mixins';
        `,
      },
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
      if (oneOfRule) {
        const svgRule = oneOfRule.oneOf.find(
          rule => rule.test && rule.test.toString().includes('svg')
        );

        if (svgRule) {
          svgRule.exclude = /\.svg$/;
        }

        oneOfRule.oneOf.unshift({
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve('@svgr/webpack'),
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
            {
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        });
      }

      return webpackConfig;
    },
  },
};
