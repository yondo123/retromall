const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/product/write',
        destination: '/product/Write'
      },
      {
        source: '/req/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_REQUEST_URL_PRODUCT}/api/:path*`
      }
    ];
  }
};
