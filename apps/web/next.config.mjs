/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,
}

export default nextConfig
