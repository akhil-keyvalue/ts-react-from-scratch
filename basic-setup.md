- yarn add react react-dom
- yarn add -D typescript @types/react @types/react-dom
- create tsconfig.json
- create src/index.html, src/index.tsx, src/app.jsx files
- we will not be able to convert the jsx to js file for that
  yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
  yarn add -D @babel/plugin-transform-runtime
- create .babelrc file and set presets
- We need webpack now for bundling
  yarn add -D webpack webpack-cli webpack-dev-server webpack-html-plugin
- We need babel-loader for transpiling the the js files using babel and web pack 
- now create the webpack/webpack.config.js file
- add start script in package.json
  "start": "webpack serve --config webpack/webpack.config.js --open"