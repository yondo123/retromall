const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/req/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_REQUEST_URL_PRODUCT}/api/:path*`
      }
    ];
  }
};
