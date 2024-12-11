/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      const allowedHost = process.env.NODE_ENV === 'production'
        ? 'https://flipkart-green-one.vercel.app'
        : 'https://vigilant-parakeet-57rx9ggxvqxc45jr-3000.app.github.dev';
  
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: allowedHost },
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
            { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  