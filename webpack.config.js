const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const dotenv = require('dotenv');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getEnvKeys = ({ path }) => {
  const env = dotenv.config({ path }).parsed;

  if (!env) return {};

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return envKeys;
};

const baseConfig = {
  entry: './src/index.tsx',
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};

const developmentConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    // probably to change
    static: false,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
    // chunkIds: 'named',
    // moduleIds: 'named',
    // runtimeChunk: 'single',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    chunkFilename: '[contenthash].chunk.js',
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin(getEnvKeys({ path: path.resolve(__dirname, '.env.dev') })),
    new HtmlWebpackPlugin({
      // filename: './index.html',
      hash: true,
      inject: true,
      template: './index.html',
      favicon: 'public/images/favicon_5.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

const productionConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[chunkhash].js',
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REBALANCER_API': JSON.stringify(process.env.REBALANCER_API),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'public/images/favicon_5.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(baseConfig, developmentConfig);
    case 'production':
      return merge(baseConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
