import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      new URL('https://placehold.co/**'),
      new URL('https://img.freepik.com/**'),
      new URL('https://assets-homolog.hypeti.cloud/**'),
      new URL('https://assets-prod.hypeti.cloud/**')
    ],
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
