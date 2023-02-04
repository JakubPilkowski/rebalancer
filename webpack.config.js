const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        // exclude: /node_modules/,
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
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
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
    new HtmlWebpackPlugin({
      // filename: './index.html',
      template: './index.html',
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
    new HtmlWebpackPlugin({
      template: 'index.html',
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
