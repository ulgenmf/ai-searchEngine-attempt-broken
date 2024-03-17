/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "images.unsplash.com",
    port: "*", // Allow both default HTTP (80) and HTTPS (443) ports
    pathname: "/*/**",
   },
  ],
 },
 transpilePackages: ["jotai-devtools"],
};

export default nextConfig;
