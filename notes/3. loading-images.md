- create file src/declarations.d.ts
- add line 
      declare module '*.png'
- add following rule into webpack.config
    {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },