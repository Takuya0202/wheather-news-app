const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// tunnelでもホットリロードを有効にする
config.server = {
  ...config.server,
  rewriteRequestUrl: (url) => {
    if (!url.endsWith(".bundle")) {
      return url;
    }
    return url + "?platform=android&dev=true&hot=true&minify=false";
  },
};

module.exports = withNativeWind(config, { input: "./global.css" });
