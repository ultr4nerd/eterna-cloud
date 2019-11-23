require('dotenv').config()
module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET
  },
  devIndicators: {
    autoPrerender: false,
  },
}