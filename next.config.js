/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/:Calculator",
        destination: "/:Calculator/index.html",
      }
    ]
},
images: {
  loader: 'imgix',
  path: '/',
},
}

module.exports = nextConfig
