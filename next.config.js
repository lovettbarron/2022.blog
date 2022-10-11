const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "./blog/assets/",
            to: "./public/assets/",
          },
        ],
      })
    );
    return config;
  },
};
