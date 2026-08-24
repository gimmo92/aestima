/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://aftercore.ai/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://aftercore.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
