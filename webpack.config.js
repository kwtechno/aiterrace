const path = require('path');
const { webpack } = require('webpack');
module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              // sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer",
                    {
                      grid: true
                    }
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 50000000000,
    maxAssetSize: 50000000000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};