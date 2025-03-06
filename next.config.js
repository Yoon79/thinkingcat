/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        // CSS와 PostCSS 관련 설정
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        });
        return config;
    },
};

module.exports = nextConfig;
