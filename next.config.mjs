import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: ['@pqina/pintura', '@pqina/react-pintura'],
}

export default withNextIntl(nextConfig)
