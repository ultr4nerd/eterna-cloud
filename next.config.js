require('dotenv').config()
module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
  },
  devIndicators: {
    autoPrerender: false,
  },
  // webpack: function (config) {
  //   config.externals = [{
  //     xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  //   }];
  //   return config
  // }
}