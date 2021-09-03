- add following line to declarations.d.ts
    declare module '*.svg'
- add following rule to webpack.config.js
    {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
    },
