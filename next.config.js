module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/stryktipset',
        destination: `https://api.www.svenskaspel.se/external/1/draw/stryktipset/draws?accesskey=${process.env.STRYKTIPSET_SECRET}`,
      },
      {
        source: '/api/stryktipset/:path*',
        destination: `https://api.www.svenskaspel.se/external/1/draw/stryktipset/draws/:path*?accesskey=${process.env.STRYKTIPSET_SECRET}`,
      },
      {
        source: '/api/europatipset',
        destination: `https://api.www.svenskaspel.se/external/1/draw/europatipset/draws?accesskey=${process.env.STRYKTIPSET_SECRET}`,
      },
    ]
  },
}

// https://api.www.svenskaspel.se/external/1/draw/{ productName }/draws/result
// https://api.www.svenskaspel.se/external/1/draw/{ productName }/draws/{drawNumber}/result
