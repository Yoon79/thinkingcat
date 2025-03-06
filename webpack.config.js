module.exports = {
    webpack(config, { isServer }) {
        // 추가적인 Webpack 설정을 수정합니다.
        if (!isServer) {
            config.module.rules.push({
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            });
        }

        return config;
    },
};
