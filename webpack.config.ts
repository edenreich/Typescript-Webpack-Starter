
import { Configuration } from 'webpack';
import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export = (env: string) => {

  const mode = (env === 'staging' || env === 'local') ? 'development' : 'production';

  const sourceMap: any = (env === 'staging' || env === 'local') ? 'inline-source-map' : '(none)';

  const config: Configuration = {
    mode: mode,
    target: "web",
    devtool: sourceMap,
    entry: {
      page_one: [resolve(__dirname, 'src/client/page_one.ts')],
      page_two: [resolve(__dirname, 'src/client/page_two.ts')],
    },
    output: {
      path: join(__dirname, 'public'),
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        '@client': resolve(__dirname, 'src/client'),
        '@server': resolve(__dirname, 'src/server'),
        '@components': resolve(__dirname, 'src/client/components'),
        '@templates': resolve(__dirname, 'src/client/templates'),
        '@interfaces': resolve(__dirname, 'src/client/interfaces'), 
      },
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Typescript App',
        inject: false,
        filename: 'index.html',
        template: 'src/client/templates/page_one.html'
      })
    ],
    devServer: {
      hot: true,
      open: true,
      compress: true,
      port: 8000,
      watchContentBase: true,
      clientLogLevel: 'none',
      contentBase: join(__dirname, 'src/client/templates')
    }
  }

  return config;
};