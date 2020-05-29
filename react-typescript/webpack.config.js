// http://gabrielprates.com/2018/07/27/preparando-um-projeto-react-para-utilizar-css-modules.html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "typings-for-css-modules-loader" },
            { loader: "sass-loader" },
        ]
      }
    ]
  }
}