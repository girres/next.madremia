/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
      {
        source: '/us',
        destination: '/es/us',
        permanent: true,
      },
      {
        source: '/diagnosis',
        destination: '/es/diagnosis',
        permanent: true,
      },
      {
        source: '/legal/data-policy',
        destination: '/es/legal/data-policy',
        permanent: true,
      },
      {
        source: '/legal/terms-conditions',
        destination: '/es/legal/terms-conditions',
        permanent: true,
      },
      {
        source: '/legal/privacy-policy',
        destination: '/es/legal/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
