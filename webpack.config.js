module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "[name].js",
      path: __dirname + "/dist",
    },
  
    // rules
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
  };