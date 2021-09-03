- yarn add -D css-loader style-loader
- update webpack config in rules add rule
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }