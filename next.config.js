/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    CMS_ENDPOINT: process.env.CMS_ENDPOINT,
    API_TOKEN: process.env.API_TOKEN
  }
}
