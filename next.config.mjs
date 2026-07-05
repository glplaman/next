/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'glplaman.github.io',
        port: '',
        pathname: '/imgs/**', // 可选：限制只允许该域名下特定路径的图片
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com', // 支持通配符，允许所有子域名
      },
    ],
  },
};

export default nextConfig;
