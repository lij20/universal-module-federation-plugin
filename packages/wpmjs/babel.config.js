module.exports = {
  plugins: [
    "@babel/plugin-transform-runtime",
  ],
  sourceType: "unambiguous",
  presets: [
    ["@babel/preset-env", {
      targets: {
        browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ]
}
