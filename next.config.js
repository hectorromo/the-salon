module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: "file-loader",
    });

    return config;
  },
};
