/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.discordapp.net',
          port: '',
          pathname: '/attachments/1152778526332821649/1166651945054900224/**',
        },
      ],
    },
  }

module.exports = nextConfig
