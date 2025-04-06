import plugin from "next-intl/plugin";

const withNextIntl = plugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|gif|svg|webm|mp4|woff2|css|js)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 30 * 1024,
      maxSize: 256 * 1024,
    };

    return config;
  },
};

export default withNextIntl(nextConfig);
