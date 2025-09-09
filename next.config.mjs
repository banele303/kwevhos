/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/environmental",
				destination: "/about-us#environmental",
				permanent: true,
			},
			{
				source: '/environ/:path*',
				destination: '/pest-logo.jpeg',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
