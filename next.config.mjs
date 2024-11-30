/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/es/diagnosis',
        destination: '/es/contact',
        permanent: true,
      },
      {
        source: '/en/diagnosis',
        destination: '/en/contact',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
