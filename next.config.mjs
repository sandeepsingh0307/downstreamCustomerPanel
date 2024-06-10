/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:slug',
                destination: 'http://www.localhost:5000/api/:slug',
            },
        ]
    },
};

export default nextConfig;
