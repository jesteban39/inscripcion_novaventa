/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr'
const nextConfig = withSvgr({output: 'export', images: {unoptimized: true}})
export default nextConfig
