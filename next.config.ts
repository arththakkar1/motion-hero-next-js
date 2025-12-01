/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.saymedia-content.com",
      },
    ],
  },
};

export default nextConfig;
