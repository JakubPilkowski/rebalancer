const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      api: path.resolve(__dirname, 'src/api'),
      components: path.resolve(__dirname, '../src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
      providers: path.resolve(__dirname, 'src/providers'),
      pages: path.resolve(__dirname, 'src/pages'),
      mutations: path.resolve(__dirname, 'src/api/mutations'),
      queries: path.resolve(__dirname, 'src/api/queries'),
    },
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
    open: true,
    // probably to change
    static: false,
    // will be used in configuration with node.js server
    // proxy: {
    //   '/api': 'http:localhost:3000',
    // },
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
      chunkFilename: '[contenthash].css',
    }),
  ],
};

const productionConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
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
